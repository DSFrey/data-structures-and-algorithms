'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  /**
   * Adds new node to the top of the stack
   * @param {*} value
   */
  push(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  pop() {
    if (!this.head) throw new Error('Stack is empty');
    let output = this.head.value;
    this.head = this.head.next;
    return output;
  }

  peek() {
    if (!this.head) throw new Error('Stack is empty');
    return this.head.value;
  }

  toString() {
    let current = this.head;
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
    this.head = null;
    this.tail = null;
  }

  enqueue(value){
    let node = new Node(value);
    if (!this.head) this.head = node;
    if (this.tail) this.tail.next = node;
    this.tail = node;
  }

  dequeue(){
    if (!this.head) throw new Error('Queue is empty');
    let output = this.head.value;
    this.head = this.head.next;
    return output;
  }

  peek() {
    if (!this.head) throw new Error('Queue is empty');
    return this.head.value;
  }

  toString() {
    let current = this.head;
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
