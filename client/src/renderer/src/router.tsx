import Home from '@renderer/pages/home'
import { createBrowserRouter } from 'react-router-dom'
import { movieStore } from '@renderer/lib/movie-store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home movieStore={movieStore} />
  }
])

export { router }
