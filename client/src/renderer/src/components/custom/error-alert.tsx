import { CodeIcon } from '@radix-ui/react-icons'
import NavigateHomeButton from '@renderer/components/custom/buttons/navigate-home-button'
import ReloadButton from '@renderer/components/custom/buttons/reload-button'
import { Alert, AlertDescription, AlertTitle } from '@renderer/components/ui/alert'
import { FC } from 'react'
import { useLocation } from 'react-router-dom'

interface IErrorAlertProps {
  title?: string
  description?: string
}

const defaultTitle = 'Something went wrong'
const defaultDescription = 'Please try again later, or try to reload the page'

const ErrorAlert: FC<IErrorAlertProps> = (props) => {
  const { title = defaultTitle, description = defaultDescription } = props

  const { pathname } = useLocation()

  const isInHomePage = pathname === '/movies'

  return (
    <Alert>
      <div className="flex gap-4 items-center">
        <CodeIcon className="w-6 h-6 text-red-600" />

        <div className="w-full">
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>
            <div className="flex flex-row justify-between items-center">
              <span>{description}</span>

              <div className="flex gap-4">
                <ReloadButton />

                {!isInHomePage && <NavigateHomeButton />}
              </div>
            </div>
          </AlertDescription>
        </div>
      </div>
    </Alert>
  )
}

export type { IErrorAlertProps }
export default ErrorAlert
