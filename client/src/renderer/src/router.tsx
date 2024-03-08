import { movieStore } from '@renderer/lib/movie-store'
import Home from '@renderer/pages/home'
import MovieDetails from '@renderer/pages/movie-details'
import { IMovieDetails } from 'omdb-sdk'
import { Navigate, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/movies" />
  },
  {
    path: '/movies',
    element: <Home movieStore={movieStore} />
  },
  {
    path: '/movies/:id',
    element: <MovieDetails />,
    loader: async ({ params }): Promise<IMovieDetails | null> => {
      return await movieStore.getMovieDetailsById(params.id!)
    }
  }
])

export { router }
