import { useState, useEffect, createContext } from 'react'
import { useLocation } from 'react-router-dom'
import useScript from './useScript'

export const TaggingContext = createContext()

export const TaggingProvider = ({ children }) => {
  const [session, setSession] = useState('')
  const [url] = useState(
    'https://storage.googleapis.com/mktstr-dev-public/tagging.js'
  )
  const [source] = useState('Rw8k051Gs71RmgcwIQSF')
  const { pathname } = useLocation()
  const status = useScript(url)

  const initTagging = () => {
    window.initTagging(source)
  }

  useEffect(() => {
    const initTagging = async (source) => {
      const data = await window.initTagging(source)
      data.source = source
      setSession(data)
    }

    if (status === 'ready') {
      initTagging(source).catch((err) => console.error(err))
    }
  }, [status, pathname, source])

  return (
    <TaggingContext.Provider value={{ initTagging, session }}>
      {children}
    </TaggingContext.Provider>
  )
}
