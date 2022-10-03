'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  /**
   * Adds new node to the top of the stack
   * @param {*} value
   */
  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    if (!this.top) throw new Error('Stack is empty');
    let output = this.top.value;
    this.top = this.top.next;
    return output;
  }

  peek() {
    if (!this.top) throw new Error('Stack is empty');
    return this.top.value;
  }

  isEmpty(){
    return !this.top;
  }

  toString() {
    let current = this.top;
    let result = '';
    while (current) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }
    result += 'NULL';
    return result;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value){
    let node = new Node(value);
    if (!this.front) this.front = node;
    if (this.back) this.back.next = node;
    this.back = node;
  }

  dequeue(){
    if (!this.front) throw new Error('Queue is empty');
    let output = this.front.value;
    this.front = this.front.next;
    return output;
  }

  peek() {
    if (!this.front) throw new Error('Queue is empty');
    return this.front.value;
  }

  isEmpty(){
    return !this.front;
  }

  toString() {
    let current = this.front;
    let result = '';
    while (current) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }
    result += 'NULL';
    return result;
  }

}

module.exports = { Stack, Queue };
