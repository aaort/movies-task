import ErrorAlert from '@renderer/components/custom/error-alert'
import ModeToggle from '@renderer/components/custom/mode-toggle'
import MovieList from '@renderer/components/custom/movie-list'
import SearchInput from '@renderer/components/custom/search-input'
import { Separator } from '@renderer/components/ui/separator'
import useFocusOnPress from '@renderer/hooks/use-focus-on-press'
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

const MoviesPage: FC<IHomeProps> = observer((props) => {
  const { movieStore } = props

  const movies = toJS(movieStore.searchedMovies || movieStore.movies)

  const { loading } = movieStore

  useFocusOnPress('search-input', 's')

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <SearchInput />

        <ModeToggle />
      </div>

      <Separator />

      {!loading && (!movies || !movies.length) ? (
        <ErrorAlert {...errorAlertTexts} />
      ) : (
        <MovieList movies={movies} loading={loading} />
      )}
    </div>
  )
})

export default MoviesPage
