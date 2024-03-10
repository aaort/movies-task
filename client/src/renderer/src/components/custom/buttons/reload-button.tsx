import { ReloadIcon } from '@radix-ui/react-icons'
import { Button } from '@renderer/components/ui/button'
import { useNavigate } from 'react-router-dom'

const ReloadButton = (): JSX.Element => {
  const navigate = useNavigate()

  const handleReload = (): void => {
    navigate(0)
  }

  return (
    <Button size="icon" variant="ghost" onClick={handleReload}>
      <ReloadIcon />
    </Button>
  )
}

export default ReloadButton
