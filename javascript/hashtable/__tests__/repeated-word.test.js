'use strict';

const { firstRepeat, countByWord, frequentWord } = require('../repeated-word');

describe('Repeated words functions work as expected', () => {
  const string1 = 'Once upon a time, there was a brave princess who...';
  const string2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way - in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
  const string3 = `It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn't know what I was doing in New York...`;

  test('firstRepeat finds the first repeated word', () => {
    expect(firstRepeat(string1)).toEqual('a');
    expect(firstRepeat(string2)).toEqual('it');
    expect(firstRepeat(string3)).toEqual('summer');
  });
  test('firstRepeat returns null if no words are repeated', () => {
    expect(firstRepeat('A phrase with no repeats')).toBeNull();
  });

  test('countByWord returns an array of every word in a string with the number of times it was used', () => {
    const string1Result = [
      ['time', 1,],
      ['was', 1,],
      ['there', 1,],
      ['princess', 1,],
      ['once', 1,],
      ['a', 2,],
      ['brave', 1,],
      ['who', 1],
      ['upon', 1,],
    ];

    expect(countByWord(string1)).toEqual(string1Result);
  });

  test('frequentWord returns an array of the one or more words used the most times', () => {
    expect(frequentWord(string1)).toContainEqual('a');
    expect(frequentWord(string2)).toContainEqual('the');
    expect(frequentWord(string3)).toContainEqual('summer', 'the', 'i', 'was');
  });
});
