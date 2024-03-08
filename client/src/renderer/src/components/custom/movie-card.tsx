import { Card, CardTitle, CardContent, CardHeader, CardFooter } from '@renderer/components/ui/card'
import { IMovie } from 'omdb-sdk'
import { FC } from 'react'

interface IMovieCardProps {
  movie: IMovie
}

const MovieCard: FC<IMovieCardProps> = (props) => {
  const { movie } = props

  return (
    <Card>
      <CardHeader>
        <CardTitle> {movie.Title} </CardTitle>
      </CardHeader>

      <CardContent>
        <img src={movie.Poster} />
      </CardContent>

      <CardFooter>{movie.Year}</CardFooter>
    </Card>
  )
}

export default MovieCard
