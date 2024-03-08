import { ReloadIcon } from '@radix-ui/react-icons'
import IconButton from '@renderer/components/custom/icon-button'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

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
