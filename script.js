'use strict';

// let numberOfFilms;
// personalMovieDB.start();
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Last film you watched?', '').trim(),
        b = prompt('How rating is this film?', '');

      if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
        personalMovieDB[a] = b;
        console.log('done');
      } else {
        console.log('Sorry');
        i--;
      }
    }
  },
  start: function () {
    numberOfFilms = +prompt('How much a films you was watched?', '');

    while (
      numberOfFilms == '' ||
      numberOfFilms == null ||
      isNaN(numberOfFilms)
    ) {
      numberOfFilms = +prompt('How much a films you was watched?', '');
    }
  },
};
personalMovieDB.rememberMyFilms();

function detectPersonalLevel() {
  if (numberOfFilms < 10) {
    alert('too bad...');
  } else if (numberOfFilms > 10 && numberOfFilms < 30) {
    alert('too bad...');
  } else if (numberOfFilms > 30) {
    alert('you are crazy!!!!');
  } else {
    alert('error...');
  }
}
detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.private);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const c = prompt(`Ваш любимый жанр под номером ${i}`, '');

    if (c !== +null || c !== '') {
      personalMovieDB.genres[i - 1] = c;
    }
  }
}
writeYourGenres();
// console.log(personalMovieDB);
