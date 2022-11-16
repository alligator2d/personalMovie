'use strict';

let numberOfFilms;
function start() {
  numberOfFilms = +prompt('How much a films you was watched?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How much a films you was watched?', '');
  }
}
start();
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyFilms() {
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
}
rememberMyFilms();

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

const usdCurr = 28;
const discount = 0.9;
function convert(amount, curr) {
  return amount * curr;
}
function promotion(result) {
  console.log(result * discount);
}
// convert(30, usdCurr);
promotion(convert(500, usdCurr));

function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) {
      return;
    }
  }
  console.log('hello');
}
test();

function SayHello(name) {
  console.log(`Hello ${name}!!`);
}
SayHello('Alligator');

function returnNeighboringNumbers(num) {
  return [num - 1, num, num + 1];
}
console.log(returnNeighboringNumbers(5));

function getMathResult(a, b) {
  if (typeof b !== 'number' || b <= 0) {
    return a;
  }
  let result = '';
  for (let i = 1; i <= b; i++) {
    if (i === b) {
      result += `${a * i}`;
    } else {
      result += `${a * i}--`;
    }
  }
  console.log(result);
}
getMathResult(5, 3);
