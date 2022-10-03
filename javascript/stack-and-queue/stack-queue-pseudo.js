'use strict';

const { Stack } = require('.');

class PsuedoQueue {
  constructor() {
    this.inStack = new Stack;
    this.outStack = new Stack;
  }

  enqueue(value) {
    while (!this.outStack.isEmpty()) {
      let transfer = this.outStack.pop();
      this.inStack.push(transfer);
    }
    this.inStack.push(value);
  }

  dequeue() {
    while (!this.inStack.isEmpty()) {
      let transfer = this.inStack.pop();
      this.outStack.push(transfer);
    }
    if (this.outStack.isEmpty()) throw new Error('Queue is empty');
    return this.outStack.pop();
  }
}

module.exports = { PsuedoQueue };
