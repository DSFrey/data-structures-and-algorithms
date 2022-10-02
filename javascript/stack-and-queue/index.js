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
   * Adds new node to the beginning of the list
   * @param {*} value
   */
  push(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }



  toString() {
    let current = this.head;
    let result = current.value;
    while (current.next) {
      current = current.next;
      result += `{ ${current.value} } -> `;
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
    let result = current.value;
    while (current.next) {
      current = current.next;
      result += ' -> ' + current.value;
    }
    result += ' -> NULL';
    return result;
  }

}

module.exports = { Stack, Queue };
