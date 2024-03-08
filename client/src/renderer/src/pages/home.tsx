import ErrorAlert from '@renderer/components/custom/error-alert'
import MovieCard from '@renderer/components/custom/movie-card'
import SearchInput from '@renderer/components/custom/search-input'
import { MovieStore } from '@renderer/lib/movie-store'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { FC, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

interface IHomeProps {
  movieStore: MovieStore
}

const Home: FC<IHomeProps> = observer((props) => {
  const { movieStore } = props
  const [searchParams] = useSearchParams()

  const s = searchParams.get('s') || ''

  const movies = toJS(movieStore.movies)

  useEffect(() => {
    if (s.length <= 2) return

    movieStore.setMoviesByKeyword(s)
  }, [s])

  if (!movies || movies.length === 0) {
    return <ErrorAlert />
  }

  return (
    <>
      <SearchInput />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  )
})

export default Home
