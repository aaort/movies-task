import BackButton from '@renderer/components/custom/back-button'
import Poster from '@renderer/components/custom/poster'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@renderer/components/ui/card'
import { IMovieDetails } from 'omdb-sdk'
import { FC } from 'react'
import { useLoaderData } from 'react-router-dom'

interface IKeyValueProps {
  _key: string
  value: string
}

const KeyValue: FC<IKeyValueProps> = (props) => {
  const { _key, value } = props

  return (
    <p>
      <span className="key">{_key}: </span>
      <span className="value">{value}</span>
    </p>
  )
}

const requiredKeyValues =
  /Type|Director|Writer|Actors|Genre|Language|Genre|Year|imdbRating|imdbVotes/

const MovieDetails = (): JSX.Element => {
  const movie = useLoaderData() as IMovieDetails

  const keyValues = Object.entries(movie).filter(([key]) => requiredKeyValues.test(key))

  return (
    <div className="flex flex-col gap-4">
      <BackButton />

      <Card>
        <CardHeader>
          <CardTitle>{movie.Title}</CardTitle>
          <CardDescription>{movie.Plot}</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col sm:flex-row gap-6">
          <Poster movie={movie} className="flex-1" />

          <div className="flex flex-col gap-2 flex-[3]">
            {keyValues.map(([key, value]) => (
              <KeyValue key={key} _key={key} value={value} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default MovieDetails
