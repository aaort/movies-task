import ErrorAlert from '@renderer/components/custom/error-alert'
import ModeToggle from '@renderer/components/custom/mode-toggle'
import MovieCard from '@renderer/components/custom/movie-card'
import SearchInput from '@renderer/components/custom/search-input'
import { Separator } from '@renderer/components/ui/separator'
import useSPress from '@renderer/hooks/use-s-press'
import { MovieStore } from '@renderer/lib/movie-store'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'

interface IHomeProps {
  movieStore: MovieStore
}

const errorAlertTexts = {
  title: 'Could not find movies for the given query',
  description: 'Please double check for your query, or reset query'
}

const Home: FC<IHomeProps> = observer((props) => {
  const { movieStore } = props

  const movies = toJS(movieStore.movies)

  useSPress()

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <SearchInput />

        <ModeToggle />
      </div>

      <Separator />

      {!movies || movies.length === 0 ? (
        <ErrorAlert {...errorAlertTexts} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
})

export default Home
