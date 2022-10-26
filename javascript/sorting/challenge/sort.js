'use strict';

// write your own comparator function for each function and export THOSE separately for testing as well. You will also use comparators in the three pre-written functions bellow

// Complete for Code Challenge 28
const yearComparator = (movieA, movieB) => movieA.year - movieB.year;

const titleComparator = (movieA, movieB) => {
  let titleA = movieA.title.toUpperCase();
  if (/^THE\s/.test(titleA)) titleA = titleA.replace('THE ', '');
  let titleB = movieB.title.toUpperCase();
  if (/^THE\s/.test(titleB)) titleB = titleB.replace('THE ', '');
  return titleA < titleB ? -1 : 1;
};

function sortYear(movies) {
  movies.sort((movieA, movieB) => yearComparator(movieA, movieB));
  return movies;
}

function sortTitle(movies) {
  movies.sort((movieA, movieB) => titleComparator(movieA, movieB));
  return movies;
}

function inGenre(movies, genre) {
  let filteredList = movies.filter(movie => movie.genres.includes(genre));
  return filteredList;
}

module.exports = { sortYear, sortTitle, inGenre, yearComparator, titleComparator };
