import { ReactNode } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import IconButton from './Icon-button'
import { ReloadIcon } from '@radix-ui/react-icons'

const ReloadButton = (): ReactNode => {
  const navigate = useNavigate()
  const [, setSearchParams] = useSearchParams()

  const handleReload = (): void => {
    setSearchParams({ s: '' })
    navigate(0)
  }

  return (
    <IconButton onClick={handleReload}>
      <ReloadIcon />
    </IconButton>
  )
}

export default ReloadButton
