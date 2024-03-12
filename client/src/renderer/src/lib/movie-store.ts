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

    this.setInitialMovies()
  }

  getMovieDetailsById = async (id: string): Promise<IMovieDetails | null> => {
    const response = await client.getMovieDetailsById(id)

    const data = await response.json()

    if (data.Error) {
      // loaders's error boundary will catch this
      throw new Error(data.Error)
    }

    return data
  }

  @action setInitialMovies = async (): Promise<void> => {
    this.setLoading(true)
    const response = await client.getRandomMovies()

    const data = await response.json()

    if (data.Error) {
      console.error(data.Error)
      this.setError(data.Error)
    } else {
      this.setMovies(data.Search)
      this.setError()
      this.setLoading(false)
    }
  }

  @action setMoviesByKeyword = async (keyword: string): Promise<void> => {
    const response = await client.getMoviesByKeyword(keyword)

    const data = await response.json()

    if (data.Error) {
      console.error(data.Error)
      this.setError(data.Error)
    } else {
      this.setError()
      this.setSearchMovies(data.Search)
    }
  }

  @action resetSearchedMovies = (): void => {
    this.searchedMovies = undefined
  }

  @action private setMovies = (data: IMovie[]): void => {
    this.movies = data
  }

  @action private setSearchMovies = (data?: IMovie[]): void => {
    this.searchedMovies = data
  }

  @action private setError = (error?: string): void => {
    this.error = error
  }

  @action private setLoading = (loading: boolean): void => {
    this.loading = loading
  }
}

const movieStore = new MovieStore()

export { MovieStore, movieStore }
