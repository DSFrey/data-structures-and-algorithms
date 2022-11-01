'use strict';

const Hashtable = require('.');

function firstRepeat(inputString) {
  let wordArray = inputString.match(/\b\w+\b/g);
  let wordHash = new Hashtable(32);
  for (const rawWord of wordArray) {
    const word = rawWord.toLowerCase();
    if (wordHash.has(word)) {
      return word;
    } else {
      wordHash.set(word, 1);
    }
  }
  return null;
}

function countByWord(inputString) {
  let wordArray = inputString.match(/\b\w+\b/g);
  let wordHash = new Hashtable(32);
  for (const rawWord of wordArray) {
    const word = rawWord.toLowerCase();
    if (wordHash.has(word)) {
      let total = wordHash.get(word);
      wordHash.set(word, total + 1);
    } else {
      wordHash.set(word, 1);
    }
  }
  const wordList = wordHash.keys();
  return wordList.map(word => [word, wordHash.get(word)]);
}

function frequentWord(inputString) {
  const wordCount = countByWord(inputString);
  const topWordCount = wordCount.reduce((topWords, word) => {
    if (word[1] > topWords[0][1]) {
      return [word];
    } else if (word[1] === topWords[0][1]) {
      return [...topWords, word];
    } else {
      return topWords;
    }
  },[['',0]]);
  return topWordCount.map(word => word[0]);
}

module.exports = {firstRepeat, countByWord, frequentWord};
