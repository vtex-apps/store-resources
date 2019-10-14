import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Helmet } from 'vtex.render-runtime'
import { graphql } from 'react-apollo'

import pwaData from './queries/pwaData.gql'
import getWebAppData from './utils/webAppIndexedDB' 

const PWAContext = React.createContext(null)

const PWAProvider = ({ rootPath, children, data = {} }) => {
  const { manifest, iOSIcons, splashes, pwaSettings, loading, error } = data

  const deferredPrompt = useRef(null)
  /* beforeinstallprompt event is fired even after the userChoice is to cancel (and there is no need to re-render) */
  const captured = useRef(false)

  const [alreadyInstalled, setAlreadyInstalled] = useState(false)
  const [installDismissed, setInstallDismissed] = useState(false)

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

  useEffect(() => {
    (async () => {
      const appIsFromHomeScreen = await getWebAppData('appIsFromHomeScreen')
      setAlreadyInstalled(appIsFromHomeScreen)
      
      const appInstallDismissed = await getWebAppData('appInstallDismissed')
      setInstallDismissed(appInstallDismissed)
    })()
  }, [])

  const showInstallPrompt = useCallback(() => {
    const prompt = deferredPrompt.current
    if (prompt) {
      prompt.prompt()
      prompt.userChoice.finally(result => {
        deferredPrompt.current = null
      })
    }
  }, [])

  const context = useMemo(() => {
    if (pwaSettings) {
      const { disablePrompt, promptOnCustomEvent } = pwaSettings
      // ios devices don't have support for installing web apps
      const isIOS = navigator && !!navigator.userAgent.match(/(iPod|iPhone|iPad)/)

      return {
        showInstallPrompt,
        settings: {
          promptOnCustomEvent: (disablePrompt || isIOS || installDismissed || alreadyInstalled) ? '' 
            : promptOnCustomEvent
        }
      }
    }
  }, [showInstallPrompt, pwaSettings, alreadyInstalled, installDismissed])

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

const options = {
  options: () => ({
    ssr: false,
  }),
}

export default { PWAContext, PWAProvider: graphql(pwaData, options)(PWAProvider), usePWA }
