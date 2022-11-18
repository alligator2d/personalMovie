'use strict';
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    personalMovieDB.count = +prompt('How much a films you was watched?', '');

    while (
      personalMovieDB.count == '' ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt('How much a films you was watched?', '');
    }
  },
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

  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      alert('too bad...');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
      alert('too bad...');
    } else if (personalMovieDB.count > 30) {
      alert('you are crazy!!!!');
    } else {
      alert('error...');
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
      if (genre !== +null || genre !== '') {
        personalMovieDB.genres[i - 1] = genre;
      } else {
        console.log('error...');
        i--;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Favorite genre ${i + 1} - this is ${item}`);
    });
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.private) {
      personalMovieDB.private = false;
    } else {
      personalMovieDB.private = true;
    }
  },
};
