import MovieDetailsErrorBoundary from '@renderer/components/custom/boundaries/movie-details-error'
import { movieStore } from '@renderer/lib/movie-store'
import MoviesPage from '@renderer/pages/movies-page'
import MovieDetailsPage from '@renderer/pages/movie-details-page'
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
    element: <MoviesPage movieStore={movieStore} />
  },
  {
    path: '/movies/:id',
    element: <MovieDetailsPage />,
    errorElement: <MovieDetailsErrorBoundary />,
    loader: ({ params }): Promise<{ movie: IMovieDetails } | null> => movieDetailsLoader(params.id)
  }
])

export { router }
