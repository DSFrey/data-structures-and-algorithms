'use strict';

const { Stack } = require('..');

describe('Stack', () => {
  test('Can successfully instantiate an empty stack', () => {
    let newStack = new Stack();
    expect(newStack).toBeTruthy();
  });
  test('Can succesfully push element onto a stack', () => {
    let newStack = new Stack();
    newStack.push(1);
    expect(newStack.toString()).toEqual('{ 1 } -> NULL');
  });
  test('Can successfully push multiple values onto a stack', () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    expect(newStack.toString()).toEqual('{ 3 } -> { 2 } -> { 1 } -> NULL');
  });
  test('Can successfully pop off the stack', () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    expect(newStack.toString()).toEqual('{ 3 } -> { 2 } -> { 1 } -> NULL');
    expect(newStack.pop()).toEqual(3);
    expect(newStack.toString()).toEqual('{ 2 } -> { 1 } -> NULL');
  });
  test('Can successfully empty a stack after multiple pops', () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    expect(newStack.toString()).toEqual('{ 3 } -> { 2 } -> { 1 } -> NULL');
    expect(newStack.pop()).toEqual(3);
    expect(newStack.pop()).toEqual(2);
    expect(newStack.pop()).toEqual(1);
    expect(newStack.toString()).toEqual('NULL');
  });
  test('Can successfully peek the next item on the stack', () => {
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    expect(newStack.peek()).toEqual(3);
  });
  test('Calling pop or peek on empty stack raises exception', () => {
    let newStack = new Stack();
    expect(newStack.isEmpty()).toBeTruthy();
    expect(() => newStack.peek()).toThrow('Stack is empty');
    expect(() => newStack.pop()).toThrow('Stack is empty');
  });
});
