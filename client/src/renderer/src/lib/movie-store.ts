import { action, makeObservable, observable } from 'mobx'
import OMDB, { IMovie, IMovieDetails } from 'omdb-sdk'

const apiKey = import.meta.env.VITE_OMDB_API_KEY

const client = new OMDB(apiKey)

class MovieStore {
  @observable error?: string
  @observable loading = false
  @observable movies: IMovie[] = []
  @observable searchedMovies?: IMovie[]

  constructor() {
    makeObservable(this)

    this.setRandomMovies()
  }

  getMovieDetailsById = async (id: string): Promise<IMovieDetails | null> => {
    const response = await client.getMovieDetailsById(id)

    const data = await response.json()

    if (data.Error) {
      throw new Error(data.Error)
    }

    return data
  }

  @action setRandomMovies = async (): Promise<void> => {
    this.loading = true
    const response = await client.getRandomMovies()

    const data = await response.json()

    if (data.Error) {
      console.error(data.Error)
      this.error = data.Error
    } else {
      this.movies = data.Search
      this.error = undefined
      this.loading = false
    }
  }

  @action setMoviesByKeyword = async (keyword: string): Promise<void> => {
    const response = await client.getMoviesByKeyword(keyword)

    const data = await response.json()

    if (data.Error) {
      console.error(data.Error)
      this.error = data.Error
    } else {
      this.error = undefined
      this.searchedMovies = data.Search
    }
  }

  @action resetSearchedMovies = (): void => {
    this.searchedMovies = undefined
  }
}

const movieStore = new MovieStore()

export { MovieStore, movieStore }
