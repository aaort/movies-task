import MovieDetailsErrorBoundary from '@renderer/components/custom/boundaries/movie-details-error'
import { movieStore } from '@renderer/lib/movie-store'
import Home from '@renderer/pages/home'
import MovieDetails from '@renderer/pages/movie-details'
import { IMovieDetails } from 'omdb-sdk'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import { movieDetailsLoader } from './loaders'

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
    errorElement: <MovieDetailsErrorBoundary />,
    loader: ({ params }): Promise<{ movie: IMovieDetails } | null> => movieDetailsLoader(params.id)
  }
])

export { router }
