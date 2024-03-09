import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@renderer/components/ui/card'
import { IMovie } from 'omdb-sdk'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import Poster from './Poster'

interface IMovieCardProps {
  movie: IMovie
}

const MovieCard: FC<IMovieCardProps> = (props) => {
  const { movie } = props

  return (
    <Link to={`/movies/${movie.imdbID}`}>
      <Card>
        <CardHeader>
          <CardTitle> {movie.Title} </CardTitle>
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
