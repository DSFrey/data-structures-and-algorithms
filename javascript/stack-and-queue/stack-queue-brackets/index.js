'use strict';

let { Stack } = require('../index');

function validateBrackets(string) {
  let bracketStack = new Stack();
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '[' || string[i] === '{' || string[i] === '(') {
      bracketStack.push(string[i]);
    }
    try {
      if (string[i] === ']') {
        if (bracketStack.peek() === '[') {
          bracketStack.pop();
        } else {
          return false;
        }
      }
      if (string[i] === '}') {
        if (bracketStack.peek() === '{') {
          bracketStack.pop();
        } else {
          return false;
        }
      }
      if (string[i] === ')') {
        if (bracketStack.peek() === '(') {
          bracketStack.pop();
        } else {
          return false;
        }
      }
    } catch (error) {
      return false;
    }
  }
  return bracketStack.isEmpty();
}

module.exports = { validateBrackets };
