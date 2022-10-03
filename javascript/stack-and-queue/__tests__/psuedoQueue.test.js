'use strict';

const { PsuedoQueue } = require('../stack-queue-pseudo');

describe('psuedoQueue', () => {
  test('Can successfully instantiate an empty psuedoQueue', () => {
    let newQueue = new PsuedoQueue();
    expect(newQueue).toBeTruthy();
  });
  test('Can succesfully enqueue into a psuedoQueue', () => {
    let newQueue = new PsuedoQueue();
    newQueue.enqueue(1);
    expect(newQueue.inStack.toString()).toEqual('{ 1 } -> NULL');
  });
  test('Can successfully enqueue multiple values into a psuedoQueue', () => {
    let newQueue = new PsuedoQueue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    expect(newQueue.inStack.toString()).toEqual('{ 3 } -> { 2 } -> { 1 } -> NULL');
  });
  test('Can successfully dequeue out of a psuedoQueue the expected value', () => {
    let newQueue = new PsuedoQueue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    expect(newQueue.inStack.toString()).toEqual('{ 3 } -> { 2 } -> { 1 } -> NULL');
    expect(newQueue.dequeue()).toEqual(1);
    expect(newQueue.outStack.toString()).toEqual('{ 2 } -> { 3 } -> NULL');
  });
  test('Can successfully enqueue after a dequeue', () => {
    let newQueue = new PsuedoQueue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    expect(newQueue.inStack.toString()).toEqual('{ 3 } -> { 2 } -> { 1 } -> NULL');
    expect(newQueue.dequeue()).toEqual(1);
    newQueue.enqueue(4);
    expect(newQueue.inStack.toString()).toEqual('{ 4 } -> { 3 } -> { 2 } -> NULL');
  });
  test('Can successfully empty a psuedoQueue after multiple dequeues', () => {
    let newQueue = new PsuedoQueue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    expect(newQueue.inStack.toString()).toEqual('{ 3 } -> { 2 } -> { 1 } -> NULL');
    expect(newQueue.dequeue()).toEqual(1);
    expect(newQueue.dequeue()).toEqual(2);
    expect(newQueue.dequeue()).toEqual(3);
    expect(newQueue.outStack.toString()).toEqual('NULL');
    expect(newQueue.inStack.toString()).toEqual('NULL');
  });
  test('Calling dequeue or peek on empty psuedoQueue raises exception', () => {
    let newQueue = new PsuedoQueue();
    expect(() => newQueue.dequeue()).toThrow('Queue is empty');
  });
});
