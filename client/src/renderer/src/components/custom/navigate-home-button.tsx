import { HomeIcon } from '@radix-ui/react-icons'
import { Button } from '@renderer/components/ui/button'
import { Link } from 'react-router-dom'

const NavigateHomeButton = (): JSX.Element => {
  return (
    <Link to="/movies">
      <Button size="icon" variant="ghost">
        <HomeIcon />
      </Button>
    </Link>
  )
}

export default NavigateHomeButton
