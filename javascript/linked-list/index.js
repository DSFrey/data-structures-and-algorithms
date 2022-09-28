'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * Adds new node to the end of the list
   * @param {*} value
   * @returns
   */
  append(value) {
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
  }

  /**
   * Adds new node to the beginning of the list
   * @param {*} value
   */
  insert(value) {
    const node = new Node(value);
    node.next = this.head;
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
   * Inserts new node in specified place
   * @param {*} value Insert before this node
   * @param {*} newValue Value to be inserted
   * @returns
   */
  insertBefore(value, newValue) {
    const node = new Node(newValue);
    if (this.head.value === value) {
      node.next = this.head;
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        node.next = current.next;
        current.next = node;
        return;
      }
      current = current.next;
    }
  }

  /**
   * Inserts new node in specified place
   * @param {*} value Insert after this node
   * @param {*} newValue Value to be inserted
   * @returns
   */
  insertAfter(value, newValue) {
    const node = new Node(newValue);
    let current = this.head;
    while (current) {
      if (current.value === value) {
        node.next = current.next;
        current.next = node;
        return;
      }
      current = current.next;
    }
  }

  /**
   *  Delete node with specified value from the list
   * @param {*} value
   */
  delete(value){
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) current.next = current.next.next;
      current = current.next;
    }
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

  /**
   *
   * @param {integer} k - how moany nodes to cound back from the end
   * @returns Returns value of node k from the end
   */
  kthFromEnd(k){
    let length = 0;
    let current = this.head;
    while (current) {
      length++;
      current = current.next;
    }
    let targetIndex = length - k;
    if (targetIndex < 1 || targetIndex > length) return 'Exception';
    current = this.head;
    for (let i = 1; i < targetIndex; i++) {
      current = current.next;
      console.log(current.value);
    }
    return current.value;
  }
}

module.exports = LinkedList;
