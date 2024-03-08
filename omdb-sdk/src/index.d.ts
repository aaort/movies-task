declare class OMDB {
    baseURL: string;
    constructor(apikey: string);
    getMoviesByKeyword(keyword: string): Promise<Response>;
    getRandomMovies(): Promise<Response>;
}
export { OMDB };
