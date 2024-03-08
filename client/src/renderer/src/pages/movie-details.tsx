import BackButton from '@renderer/components/custom/back-button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@renderer/components/ui/card'
import { IMovieDetails } from 'omdb-sdk'
import { ReactNode } from 'react'
import { useLoaderData } from 'react-router-dom'

const MovieDetails = (): ReactNode => {
  const movie = useLoaderData() as IMovieDetails

  return (
    <div className="flex flex-col gap-4">
      <BackButton />

      <Card>
        <CardHeader>
          <CardTitle>{movie.Title}</CardTitle>
          <CardDescription>{movie.Plot}</CardDescription>
        </CardHeader>
        <CardContent>
          <img src={movie.Poster} />
        </CardContent>
      </Card>
    </div>
  )
}

export default MovieDetails
