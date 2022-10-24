const insertionSort = require('.');

describe('Insertion sort works as expected', () => {
  test('Sorts an array of unique positive integers', () => {
    expect(insertionSort([8, 4, 23, 42, 16, 15])).toEqual([4, 8, 15, 16, 23, 42]);
  });
  test('Sorts an array with repeated values', () => {
    expect(insertionSort([5, 12, 7, 5, 5, 7])).toEqual([5, 5, 5, 7, 7, 12]);
  });
  test('Sorts a reverse-sorted array with a negative value', () => {
    expect(insertionSort([20, 18, 12, 8, 5, -2])).toEqual([-2, 5, 8, 12, 18, 20]);
  });
});
