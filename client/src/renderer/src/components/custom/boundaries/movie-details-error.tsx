import ErrorAlert, { IErrorAlertProps } from '@renderer/components/custom/error-alert'
import { ReactNode } from 'react'
import { useParams, useRouteError } from 'react-router-dom'

const errorAlertTexts = (id?: string): IErrorAlertProps => ({
  title: `Unable to find the movie with the id: ${id}`,
  description: `Try reloading the page, if issue still persists, navigate home`
})

function MovieDetailsErrorBoundary(): ReactNode {
  const params = useParams()
  const error = useRouteError() as Record<string, string>

  console.error(error)

  return <ErrorAlert {...errorAlertTexts(params.id)} />
}

export default MovieDetailsErrorBoundary
