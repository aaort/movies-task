import { Cross1Icon } from '@radix-ui/react-icons'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@renderer/components/ui/card'
import { IMovie } from 'omdb-sdk'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'

interface IMovieCardProps {
  movie: IMovie
}

const MovieCard: FC<IMovieCardProps> = (props) => {
  const { movie } = props
  const [isImageAvailable, setIsImageAvailable] = useState<boolean>(true)

  const handleImageError = (): void => {
    setIsImageAvailable(false)
  }

  return (
    <Link to={`/movies/${movie.imdbID}`}>
      <Card>
        <CardHeader>
          <CardTitle> {movie.Title} </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="poster-wrapper">
            {isImageAvailable ? (
              <img
                src={movie.Poster}
                className="poster"
                hidden={!isImageAvailable}
                onError={handleImageError}
              />
            ) : (
              <Cross1Icon className="absolute z-10 text-slate-100 w-[30px] h-[30px]" />
            )}
          </div>
        </CardContent>

        <CardFooter>{movie.Year}</CardFooter>
      </Card>
    </Link>
  )
}

export default MovieCard
