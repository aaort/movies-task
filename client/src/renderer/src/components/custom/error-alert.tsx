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
      <div className="flex gap-4 items-center">
        <CodeIcon className="w-6 h-6 text-red-600" />

        <div className="w-full">
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>
            <div className="flex flex-row justify-between items-center">
              <span>{description}</span>

              <ReloadButton />
            </div>
          </AlertDescription>
        </div>
      </div>
    </Alert>
  )
}

export default ErrorAlert
