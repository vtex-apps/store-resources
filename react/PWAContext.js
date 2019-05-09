import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react'

const PWAContext = React.createContext(null)

const PWAProvider = ({ settings, children }) => {
  const deferredPrompt = useRef(null)
  useEffect(() => {
    const handleBeforeInstall = e => {
      console.log('handleBeforeInstall', settings)
      const { promptOnCustomEvent } = settings
      if (promptOnCustomEvent) {
        e.preventDefault()
        deferredPrompt.current = e
        return false
      }
      return true
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstall)
    return () =>
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall)
  }, [settings])

  const showInstallPrompt = useCallback(() => {
    const prompt = deferredPrompt.current
    if (prompt) {
      prompt.prompt()
      prompt.userChoice.finally(result => {
        deferredPrompt.current = null
      })
    }
  }, [])

  const context = useMemo(() => ({ showInstallPrompt }), [showInstallPrompt])

  return <PWAContext.Provider value={context}>{children}</PWAContext.Provider>
}

const usePWA = () => {
  return useContext(PWAContext)
}

export default { PWAContext, PWAProvider, usePWA }
