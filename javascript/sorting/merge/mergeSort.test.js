const mergeSort = require('.');

describe('mergeSort works as expected', () => {
  test('Sorts an array of unique positive integers', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    mergeSort(arr);
    expect(arr).toEqual([4, 8, 15, 16, 23, 42]);
  });
  test('Sorts an array with repeated values', () => {
    let arr = [5, 12, 7, 5, 5, 7];
    mergeSort(arr);
    expect(arr).toEqual([5, 5, 5, 7, 7, 12]);
  });
  test('Sorts a reverse-sorted array with a negative value', () => {
    let arr = [20, 18, 12, 8, 5, -2];
    mergeSort(arr);
    expect(arr).toEqual([-2, 5, 8, 12, 18, 20]);
  });
});
