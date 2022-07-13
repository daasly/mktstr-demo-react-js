import { useEffect, useState } from 'react'

const useScript = (url) => {
  const [status, setStatus] = useState(url ? 'loading' : 'idle')

  useEffect(() => {
    if (!url) {
      setStatus('idle')
      return
    }

    let script = document.querySelector(`script[src="${url}"]`)

    if (!script) {
      script = document.createElement('script')
      script.src = url
      script.type = 'text/javascript'
      script.async = true

      document.head.appendChild(script)

      const setAttributeFromEvent = (event) => {
        script.setAttribute(
          'data-status',
          event.type === 'load' ? 'ready' : 'error'
        )
      }

      script.addEventListener('load', setAttributeFromEvent)
      script.addEventListener('error', setAttributeFromEvent)
    } else {
      setStatus(script.getAttribute('data-status'))
    }

    const setStateFromEvent = (event) => {
      setStatus(event.type === 'load' ? 'ready' : 'error')
    }

    script.addEventListener('load', setStateFromEvent)
    script.addEventListener('error', setStateFromEvent)

    return () => {
      if (script) {
        script.removeEventListener('load', setStateFromEvent)
        script.removeEventListener('error', setStateFromEvent)
      }
    }
  }, [url])

  return status
}

export default useScript
