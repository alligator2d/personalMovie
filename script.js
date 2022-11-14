'use strict';
const numberOfFilms = +prompt('How much a films you was watched?', '');
const lastFilm = prompt('Last film you watched?', '');
const ratingFilm = +prompt('How rating is this film?', '');
const lastFilm2 = prompt('Last film you watched?', '');
const ratingFilm2 = +prompt('How rating is this film?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {
    [lastFilm]: ratingFilm,
    [lastFilm2]: ratingFilm2,
  },
  actors: {},
  genres: [],
  private: false,
};

console.log(personalMovieDB.count);
console.log(personalMovieDB.movies);
