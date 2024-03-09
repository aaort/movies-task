import { CodeIcon } from '@radix-ui/react-icons'
import { Alert, AlertDescription, AlertTitle } from '@renderer/components/ui/alert'
import { FC } from 'react'
import ReloadButton from './reload-button'

interface IErrorAlert {
  title?: string
  description?: string
}

const defaultTitle = 'Something went wrong'
const defaultDescription = 'Please try again later, or try to reload the page'

const ErrorAlert: FC<IErrorAlert> = (props) => {
  const { title = defaultTitle, description = defaultDescription } = props

  return (
    <Alert>
      <CodeIcon />

      <AlertTitle>{title}</AlertTitle>

      <AlertDescription>
        <div className="flex flex-row justify-between items-center">
          <span>{description}</span>

          <ReloadButton />
        </div>
      </AlertDescription>
    </Alert>
  )
}

export default ErrorAlert
