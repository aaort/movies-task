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
    <Card>
      <CardHeader>
        <CardTitle>{movie.Title}</CardTitle>

        <CardDescription>{movie.Plot}</CardDescription>
      </CardHeader>

      <CardContent>
        <img src={movie.Poster} />
      </CardContent>
    </Card>
  )
}

export default MovieDetails
