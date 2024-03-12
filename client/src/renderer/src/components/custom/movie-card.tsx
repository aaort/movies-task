import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@renderer/components/ui/card'
import { IMovie } from 'omdb-sdk'
import { FC } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Poster from './poster'

interface IMovieCardProps {
  movie: IMovie
}

const MovieCard: FC<IMovieCardProps> = (props) => {
  const { movie } = props
  const [searchParams] = useSearchParams()

  return (
    <Link to={{ pathname: `/movies/${movie.imdbID}`, search: searchParams.toString() }}>
      <Card className="h-full">
        <CardHeader>
          <CardTitle>{movie.Title}</CardTitle>

          <CardDescription className="capitalize">{movie.Type}</CardDescription>
        </CardHeader>

        <CardContent>
          <Poster movie={movie} />
        </CardContent>

        <CardFooter>{movie.Year}</CardFooter>
      </Card>
    </Link>
  )
}

export default MovieCard
