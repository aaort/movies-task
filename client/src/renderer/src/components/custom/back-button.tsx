import { ArrowLeftIcon } from '@radix-ui/react-icons'
import IconButton from '@renderer/components/custom/icon-button'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = (): ReactNode => {
  const navigate = useNavigate()

  const handleClick = (): void => {
    navigate(-1)
  }

  return (
    <IconButton onClick={handleClick}>
      <ArrowLeftIcon />
    </IconButton>
  )
}

export default BackButton
