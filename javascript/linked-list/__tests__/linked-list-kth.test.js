'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List method kthFromEnd', () => {
  let newList = new LinkedList();
  newList.insert(0);
  newList.insert(1);
  newList.insert(2);
  newList.insert(3);
  newList.insert(4);
  test('Find the node k positions from the end', () => {
    expect(newList.kthFromEnd(2)).toEqual(2);
  });
  test('Give exception when k is greater than the length of list', () => {
    expect(newList.kthFromEnd(6)).toEqual('Exception');
  });
  test('Give exception when length of list and k are the same', () => {
    expect(newList.kthFromEnd(5)).toEqual('Exception');
  });
  test('Give exception when k is negative', () => {
    expect(newList.kthFromEnd(-5)).toEqual('Exception');
  });
  test('Functions when length of list is 1', () => {
    let oneNode = new LinkedList();
    oneNode.insert(1);
    expect(oneNode.kthFromEnd(5)).toEqual('Exception');
  });
  test('Find middle node', () => {
    expect(newList.middleNode()).toEqual(2);
  });
});
