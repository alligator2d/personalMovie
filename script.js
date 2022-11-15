'use strict';
const numberOfFilms = +prompt('How much a films you was watched?', '');
// const lastFilm = prompt('Last film you watched?', '');
// const ratingFilm = +prompt('How rating is this film?', '');
// const lastFilm2 = prompt('Last film you watched?', '');
// const ratingFilm2 = +prompt('How rating is this film?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {
    // [lastFilm]: ratingFilm,
    // [lastFilm2]: ratingFilm2,
  },
  actors: {},
  genres: [],
  private: false,
};
for (let i = 0; i < 2; i++) {
  const a = prompt('Last film you watched?', ''),
    b = prompt('How rating is this film?', '');

  if (a != null && b !== null && a != '' && b != '' && a.length < 50) {
    personalMovieDB[a] = b;
    console.log('done');
  } else {
    console.log('Sorry');
    i--;
  }
}

if (numberOfFilms < 10) {
  alert('too bad...');
} else if (numberOfFilms > 10 && numberOfFilms < 30) {
  alert('too bad...');
} else if (numberOfFilms > 30) {
  alert('you are crazy!!!!');
} else {
  alert('error...');
}

console.log(personalMovieDB);

// let result = '';
// let len = 7;
// for (let i = 1; i < len; i++) {
//   for (let k = 0; k < i; k++) {
//     result += '*';
//   }
//   result += '\n';
// }
// // console.log(result);
// let arr = [];
// let count = 5;
// for (let i = 0; i <= 5; i++) {
//   arr[i] = count++;
//   console.log(arr);
// }

// const newArray = [1, 4, 3, 2, 5, 23];
// const copyAr = [];
// for (let i = 0; i < newArray.length; i++) {
//   copyAr[i] = newArray[i];
//   console.log(copyAr);
// }

// const doubleArray = [5, 10, 'Shopping', 20, 'Homework'];
// for (let i = 0; i < doubleArray.length; i++) {
//   if (typeof doubleArray[i] === 'number') {
//     doubleArray[i] *= 2;
//   } else {
//     doubleArray[i] += '- done';
//   }
//   console.log(doubleArray);
// }
// let rev = doubleArray.reverse();
// console.log(rev);
