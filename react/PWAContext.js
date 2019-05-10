import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

const PWAContext = React.createContext(null)

const PWAProvider = ({ settings, children }) => {
  const deferredPrompt = useRef(null)
  /* beforeinstallprompt event is fired even after the userChoice is to cancel */
  const [captured, setCaptured] = useState(false)
  useEffect(() => {
    const handleBeforeInstall = e => {
      const { promptOnCustomEvent } = settings
      if (promptOnCustomEvent && !captured) {
        e.preventDefault()
        deferredPrompt.current = e
        setCaptured(true)
        return false
      }
      return true
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstall)
    return () =>
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall)
  }, [captured, settings])

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
