'use strict';

const { Queue } = require('..');

describe('Queue', () => {
  test('Can successfully instantiate an empty queue', () => {
    let newQueue = new Queue();
    expect(newQueue).toBeTruthy();
  });
  test('Can succesfully enqueue into a Queue', () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    expect(newQueue.toString()).toEqual('{ 1 } -> NULL');
  });
  test('Can successfully enqueue multiple values into a Queue', () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    expect(newQueue.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> NULL');
  });
  test('Can successfully dequeue out of a queue the expected value', () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    expect(newQueue.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> NULL');
    expect(newQueue.dequeue()).toEqual(1);
    expect(newQueue.toString()).toEqual('{ 2 } -> { 3 } -> NULL');
  });
  test('Can successfully empty a queue after multiple dequeues', () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    expect(newQueue.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> NULL');
    expect(newQueue.dequeue()).toEqual(1);
    expect(newQueue.dequeue()).toEqual(2);
    expect(newQueue.dequeue()).toEqual(3);
    expect(newQueue.toString()).toEqual('NULL');
  });
  test('Can successfully peek into a queue, seeing the expected value', () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    expect(newQueue.peek()).toEqual(1);
  });
  test('Calling dequeue or peek on empty queue raises exception', () => {
    let newQueue = new Queue();
    expect(() => newQueue.peek()).toThrow('Queue is empty');
  });
});
