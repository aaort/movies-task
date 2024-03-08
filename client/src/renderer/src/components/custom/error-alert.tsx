import { CodeIcon } from '@radix-ui/react-icons'
import { Alert, AlertDescription, AlertTitle } from '@renderer/components/ui/alert'
import { ReactNode } from 'react'
import ReloadButton from './reload-button'

const ErrorAlert = (): ReactNode => {
  return (
    <Alert>
      <CodeIcon />

      <AlertTitle>Something went wrong</AlertTitle>

      <AlertDescription>
        <div className="flex flex-row justify-between">
          <span>Please try again later, or try to reload the page</span>

          <ReloadButton />
        </div>
      </AlertDescription>
    </Alert>
  )
}

export default ErrorAlert
