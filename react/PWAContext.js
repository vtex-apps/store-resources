import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react'
import { Helmet } from 'vtex.render-runtime'
import { useQuery } from 'react-apollo'

import pwaData from './queries/pwaData.gql'

const PWAContext = React.createContext(null)

const PWAProvider = ({ rootPath, children }) => {
  const { data:{manifest, iOSIcons, splashes, pwaSettings}={}, loading, error } = useQuery(pwaData, { ssr: false })

  const deferredPrompt = useRef(null)
  /* beforeinstallprompt event is fired even after the userChoice is to cancel (and there is no need to re-render) */
  const captured = useRef(false)

  useEffect(() => {
    const handleBeforeInstall = e => {
      const { promptOnCustomEvent, disablePrompt } = pwaSettings
      if (promptOnCustomEvent !== 'default' && !captured.current) {
        e.preventDefault()

        if (disablePrompt) {
          return false
        }

        deferredPrompt.current = e
        captured.current = true
        return false
      }
      return true
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstall)
    return () =>
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall)
  }, [captured, pwaSettings])

  const showInstallPrompt = useCallback(() => {
    const prompt = deferredPrompt.current
    if (prompt) {
      prompt.prompt()
      prompt.userChoice.finally(() => {
        deferredPrompt.current = null
      })
    }
  }, [])

  const context = useMemo(() => {
    if (pwaSettings) {
      const { disablePrompt, promptOnCustomEvent } = pwaSettings
      return {
        showInstallPrompt,
        settings: {
          promptOnCustomEvent: disablePrompt ? '' : promptOnCustomEvent
        }
      }
    }
  }, [showInstallPrompt, pwaSettings])

  const hasManifest = !loading && manifest && !error

  return (
    <PWAContext.Provider value={context}>
      {hasManifest && (
        <Helmet
          meta={[
            { name: 'theme-color', content: manifest.theme_color },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
          ]}
          link={[
            {
              rel: 'manifest',
              href: `${rootPath}/pwa/manifest.json`,
            },
            ...(iOSIcons
              ? iOSIcons.map(icon => ({
                rel: 'apple-touch-icon',
                sizes: icon.sizes,
                href: `${rootPath}${icon.src}`,
              }))
              : []),
            ...(splashes
              ? splashes.map(splash => ({
                href: `${rootPath}${splash.src}`,
                sizes: splash.sizes,
                rel: 'apple-touch-startup-image',
              }))
              : []),
          ].filter(Boolean)}
        />
      )}
      {children}
    </PWAContext.Provider>
  )
}

const usePWA = () => {
  return useContext(PWAContext)
}

export default { PWAContext, PWAProvider: PWAProvider, usePWA }
