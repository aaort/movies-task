import { Card, CardTitle, CardContent, CardHeader, CardFooter } from '@renderer/components/ui/card'
import { IMovie } from 'omdb-sdk'
import { FC } from 'react'
import { Link } from 'react-router-dom'

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
          <img src={movie.Poster} className="poster" />
        </CardContent>

        <CardFooter>{movie.Year}</CardFooter>
      </Card>
    </Link>
  )
}

export default MovieCard
