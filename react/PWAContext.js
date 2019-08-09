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
  /* beforeinstallprompt event is fired even after the userChoice is to cancel (and there is no need to re-render) */
  const captured = useRef(false)

  useEffect(() => {
    const handleBeforeInstall = e => {
      const { addToHomeScreenPrompt } = settings
      if (addToHomeScreenPrompt !== "default" && !captured.current) {
        e.preventDefault()
        
        if(addToHomeScreenPrompt === "disable")
          return false
        
        deferredPrompt.current = e
        captured.current = true
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

  const context = useMemo(() => ({ showInstallPrompt, settings }), [showInstallPrompt, settings])

  return <PWAContext.Provider value={context}>{children}</PWAContext.Provider>
}

const usePWA = () => {
  return useContext(PWAContext)
}

export default { PWAContext, PWAProvider, usePWA }
