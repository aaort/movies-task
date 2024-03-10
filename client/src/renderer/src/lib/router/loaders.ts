import { movieStore } from '@renderer/lib/movie-store'
import { IMovieDetails } from 'omdb-sdk'

const movieDetailsLoader = async (id?: string): Promise<{ movie: IMovieDetails } | null> => {
  if (!id) return null

  const movie = (await movieStore.getMovieDetailsById(id)) as IMovieDetails

  return { movie }
}

export { movieDetailsLoader }
