'use strict';

const Hashtable = require(".");

function firstRepeat(inputString) {
  let wordArray = inputString.match(/\b\w+\b/);
  let wordHash = new Hashtable(32);
  wordArray.forEach(word => {
    if (wordHash.has(word)) {
      return word;
    }
  });
  return null;
}

function countByWord(inputString) {
  let wordArray = inputString.match(/\b\w+\b/);
  let wordHash = new Hashtable(32);
  wordArray.forEach(word => {
    if (wordHash.has(word)) {
      let total = wordHash.get(word);
      wordHash.set(word, total + 1);
    } else {
      wordHash.set(word, 1);
    }
  });
  const wordList = wordHash.keys();
  const wordCount = wordList.map(word => [word, wordHash.get(word)]);
  return wordCount;
}
