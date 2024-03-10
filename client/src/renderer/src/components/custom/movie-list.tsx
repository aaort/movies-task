import MovieCard from '@renderer/components/custom/movie-card'
import Skeleton from '@renderer/components/ui/skeleton'
import { IMovie } from 'omdb-sdk'
import { FC } from 'react'

const skeletons = Array.from({ length: 10 }, (_, i) => i + 1)

interface IMovieListProps {
  movies: IMovie[]
  loading: boolean
}

const MovieList: FC<IMovieListProps> = (props) => {
  const { loading, movies } = props

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {(loading ? skeletons : movies).map((item) =>
        loading ? (
          <Skeleton key={item} className="h-[400px]" />
        ) : (
          <MovieCard key={item.imdbID} movie={item} />
        )
      )}
    </div>
  )
}

export default MovieList
