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
    console.log(this.head);
    if (this.head) return this.head.value;
    throw new Error('Stack is empty');
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



  toString() {
    let current = this.head;
    let result = '';
    while (current) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }
    result += ' -> NULL';
    return result;
  }

}

module.exports = { Stack, Queue };
