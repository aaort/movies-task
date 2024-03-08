import { randomGenres } from "./random-genres";

class OMDB {
  baseURL: string;

  constructor(apiKey: string) {
    this.baseURL = `http://www.omdbapi.com/?apikey=${apiKey}`;
  }

  async getMoviesByKeyword(keyword: string) {
    return await fetch(`${this.baseURL}&s=${keyword}`);
  }

  async getRandomMovies() {
    const randomGenre =
      randomGenres[Math.floor(Math.random() * (randomGenres.length - 1))];

    return await this.getMoviesByKeyword(randomGenre);
  }

  async getMovieById(id: string) {
    return await fetch(`${this.baseURL}&i=${id}`);
  }
}

export { OMDB };
