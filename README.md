# Movies task

This is a monorepo for the task project of movies website where you can search for movies, view details and more.

## Description

Project utilizes [yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) in order to extract utilities that allow requesting data from [OMDB API](https://www.omdbapi.com/).

[SDK](omdb-sdk/) - Exports a class that can must be provided with the `api key` in order to make authorized requests to the `OMDB API`. 
[Client](client/) - [Electron-vite](https://electron-vite.org/) project that allows running React JSX code on two different platforms, desktop and browser.

### Project Structure

**SDK**

SDK exposes a class with three different utility methods for communicating with the `API`.
- You can get 10 random movies in a single genre (method: `getRandomMovies`).
- You can get details of the particular movie by it's imdb id (method: `getMovieDetailsById`).
- You can search for movies by title or other relevant keyword (method: `getMoviesByKeyword`).

**Client**

**The actual application's code is placed under [renderer](client/src/renderer/src)**

`main` and `preload` directories include code only specific to the [Electron](https://www.electronjs.org/).

I also have `electron.vite.config.ts` for configurations specific to the `Electron` framework.

### Getting Started 

- Copy repo locally on your machine.
- Run `yarn install` or just `yarn` at the root of the project.
- Run `yarn client dev:website` to start the dev server with Vite alone. Then you can visit `http://localhost:5173/` in your browser.
- You can run both desktop and web applications at once by running `yarn client dev`.
