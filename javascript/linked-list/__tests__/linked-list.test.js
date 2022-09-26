'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  test('Instantiate an empty linked list', () => {
    let newList = new LinkedList();
    expect(newList).toBeTruthy();
  });
  test('Insert into the linked list', () => {
    let newList = new LinkedList();
    newList.insert(1);
    newList.insert(2);
    expect(newList.head.value).toEqual(2);
  });
  // test('Head property points to the first node in the linked list', ()=>{
  //   I don't know how to test this; the head is always the first item in the list, that's how the list is defined.
  // })
  test('Insert multiple nodes into the linked list', () => {
    let newList = new LinkedList();
    newList.insert(1);
    newList.insert(2);
    expect(newList.head.value).toEqual(2);
    expect(newList.head.next.value).toEqual(1);
  });
  test('Return true when finding a value that is in the linked list', () => {
    let newList = new LinkedList();
    newList.insert(1);
    newList.insert(2);
    expect(newList.includes(2)).toBeTruthy();
  });
  test('Return false when finding a value that is not in the linked list', () => {
    let newList = new LinkedList();
    newList.insert(1);
    newList.insert(2);
    expect(newList.includes(3)).toBeFalsy();
  });
  test('Return a collection of all the values that exist in the linked list', () => {
    let newList = new LinkedList();
    newList.insert('{ c }');
    newList.insert('{ b }');
    newList.insert('{ a }');
    expect(newList.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
  });
});
