import { randomGenres } from "./random-genres"
import type { IMovie, IMovieDetails } from "./types"

class OMDB {
  baseURL: string

  constructor(apiKey: string) {
    this.baseURL = `https://www.omdbapi.com/?apikey=${apiKey}`
  }

  async getMoviesByKeyword(keyword: string): Promise<Response> {
    return await fetch(`${this.baseURL}&s=${keyword}`)
  }

  async getRandomMovies(): Promise<Response> {
    const randomGenre =
      randomGenres[Math.floor(Math.random() * (randomGenres.length - 1))]

    return await this.getMoviesByKeyword(randomGenre)
  }

  async getMovieDetailsById(id: string): Promise<Response> {
    return await fetch(`${this.baseURL}&i=${id}`)
  }
}

export { OMDB }
export type { IMovie, IMovieDetails }
export default OMDB
