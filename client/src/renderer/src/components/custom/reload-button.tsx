import { ReloadIcon } from '@radix-ui/react-icons'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import IconButton from './Icon-button'

const ReloadButton = (): ReactNode => {
  const navigate = useNavigate()

  const handleReload = (): void => {
    navigate(0)
  }

  return (
    <IconButton onClick={handleReload}>
      <ReloadIcon />
    </IconButton>
  )
}

export default ReloadButton
