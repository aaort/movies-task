import { useEffect } from 'react'

const useFocusOnPress = (elemId: string, key: string): void => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent): void => {
      if (event.key === key) {
        const searchInput = document.getElementById(elemId)
        setTimeout(() => {
          searchInput?.focus()
        }, 50)
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])
}

export default useFocusOnPress
