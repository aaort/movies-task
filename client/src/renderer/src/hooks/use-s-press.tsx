import { useEffect } from 'react'

const useSPress = (): void => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent): void => {
      if (event.key === 's') {
        const searchInput = document.getElementById('search-input')
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

export default useSPress
