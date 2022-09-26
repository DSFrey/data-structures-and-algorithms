'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * Adds new node to the end of the list
   * @param {*} value
   * @returns
   */
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    node.previous = current;
  }

  /**
   * Adds new node to the beginning of the list
   * @param {*} value
   */
  insert(value) {
    const node = new Node(value);
    node.next = this.head;
    node.next.previous = node;
    this.head = node;
  }

  /**
   * Checks if list contains the search value
   * @param {*} value
   * @returns
   */
  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  /**
   *
   * @returns Returns string representing all values in the list
   */
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

module.exports = DoubleLinkedList;
