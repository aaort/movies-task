import { action, makeObservable, observable } from 'mobx'
import OMDB, { IMovie, IMovieDetails } from 'omdb-sdk'

const apiKey = import.meta.env.VITE_OMDB_API_KEY

const client = new OMDB(apiKey)

class MovieStore {
  @observable loading = false
  @observable movies: IMovie[] = []

  constructor() {
    makeObservable(this)

    this.setRandomMovies()
  }

  getMovieDetailsById = async (id: string): Promise<IMovieDetails | null> => {
    try {
      const response = await client.getMovieDetailsById(id)

      return await response.json()
    } catch (e) {
      // TODO: implement error handling
      return null
    }
  }

  @action setRandomMovies = async (): Promise<void> => {
    this.loading = true
    try {
      const response = await client.getRandomMovies()

      this.movies = (await response.json()).Search
    } catch (e) {
      // TODO: implement error handling
    }

    this.loading = false
  }

  @action setMoviesByKeyword = async (keyword: string): Promise<void> => {
    try {
      const response = await client.getMoviesByKeyword(keyword)

      this.movies = (await response.json()).Search
    } catch (e) {
      // TODO: implement error handling
    }
  }
}

const movieStore = new MovieStore()

export { MovieStore, movieStore }
