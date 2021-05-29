// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  return arr.map((obj) => obj.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  //const ifDrama = arr => arr.includes("drama");

  const spielbergArray = arr.filter(
    (obj) => obj.director === 'Steven Spielberg' && obj.genre.includes('Drama')
  );
  return spielbergArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let scores = arr.reduce((acc, movie) => {
    let score = movie.score;
    if (!score) {
      score = 0;
    }
    return acc + score;
  }, 0);
  let avrg = scores / arr.length;
  return parseFloat(avrg.toFixed(2));

  //const sumScore = arr.map((obj)=> obj.score);
  //return ((sumScore.reduce((score1,score2)=>score1+score2)/arr.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let dramas = arr.filter((obj) => obj.genre.includes('Drama'));
  return scoresAverage(dramas);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let sortedArr = [...arr];

  sortedArr.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
  });

  sortedArr.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
    } else {
      return a.year - b.year;
    }
  });
  return sortedArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
