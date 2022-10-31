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

