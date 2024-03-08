import { MovieStore } from '@renderer/lib/movie-store'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'

interface IHomeProps {
  movieStore: MovieStore
}

const Home: FC<IHomeProps> = observer((props) => {
  const { movieStore } = props

  const movies = toJS(movieStore.movies)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3">
      {movies.map((movie) => (
        <span key={movie.imdbID}>{movie.Title}</span>
      ))}
    </div>
  )
})

export default Home
