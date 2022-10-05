'user strict';

const { validateBrackets } = require('../stack-queue-brackets');

describe('Bracket matching validator', () => {
  test('Returns true for no bracket string', () => {
    expect(validateBrackets('Nobody here but us chickens')).toBeTruthy();
  });
  test('Returns true for single pair string', () => {
    expect(validateBrackets('[]')).toBeTruthy();
  });
  test('Returns true for consecutive pair string', () => {
    expect(validateBrackets('[]{}')).toBeTruthy();
  });
  test('Returns true for nested pair string', () => {
    expect(validateBrackets('[()]')).toBeTruthy();
  });
  test('Returns true with extra characters', () => {
    expect(validateBrackets('[banana]')).toBeTruthy();
  });
  test('Returns false for missing close bracket', () => {
    expect(validateBrackets('[')).toBeFalsy();
  });
  test('Returns false for too many close brackets', () => {
    expect(validateBrackets(']')).toBeFalsy();
  });
  test('Returns false for mis-matching close bracket', () => {
    expect(validateBrackets('[)')).toBeFalsy();
    expect(validateBrackets('[}')).toBeFalsy();
    expect(validateBrackets('(]')).toBeFalsy();
  });
});
