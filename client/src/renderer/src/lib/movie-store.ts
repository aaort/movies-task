import { action, makeObservable, observable } from 'mobx'
import OMDB, { IMovie } from 'omdb-sdk'

const apiKey = import.meta.env.VITE_OMDB_API_KEY

const client = new OMDB(apiKey)

class MovieStore {
  @observable movies: IMovie[] = []

  constructor() {
    makeObservable(this)

    this.setRandomMovies()
  }

  @action setRandomMovies = async (): Promise<void> => {
    try {
      const response = await client.getRandomMovies()

      this.movies = (await response.json()).Search
    } catch (e) {
      // TODO: implement error handling
    }
  }
}

const movieStore = new MovieStore()

export { MovieStore, movieStore }
