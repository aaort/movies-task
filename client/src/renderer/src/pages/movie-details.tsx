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

        <CardContent className="flex gap-6">
          <img src={movie.Poster} />

          <div className="flex flex-col gap-2">
            <p>
              <span className="key">Director: </span>
              <span className="value">{movie.Director}</span>
            </p>

            <p>
              <span className="key">Writer: </span>
              <span className="value">{movie.Writer}</span>
            </p>

            <p>
              <span className="key">Actors: </span>
              <span className="value">{movie.Actors}</span>
            </p>

            <p>
              <span className="key">Genre: </span>
              <span className="value">{movie.Genre}</span>
            </p>

            <p>
              <span className="key">Language: </span>
              <span className="value">{movie.Language}</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default MovieDetails
