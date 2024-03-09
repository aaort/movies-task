import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { Button } from '@renderer/components/ui/button'
import { useNavigate } from 'react-router-dom'

const BackButton = (): JSX.Element => {
  const navigate = useNavigate()

  const handleClick = (): void => {
    navigate(-1)
  }

  return (
    <Button size="icon" variant="ghost" onClick={handleClick}>
      <ArrowLeftIcon />
    </Button>
  )
}

export default BackButton
