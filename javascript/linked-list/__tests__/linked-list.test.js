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
  test('Add a node to the end of the linked list',()=>{
    let newList = new LinkedList();
    newList.insert('{ a }');
    newList.insert('{ b }');
    newList.append('{ c }');
    expect(newList.toString()).toEqual('{ b } -> { a } -> { c } -> NULL');
  });
  test('Add multiple nodes to the end of the linked list',()=>{
    let newList = new LinkedList();
    newList.append('{ a }');
    newList.append('{ b }');
    newList.append('{ c }');
    expect(newList.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
  });
  test('Insert a node before a node located in the middle of a linked list',()=>{
    let newList = new LinkedList();
    newList.append('{ a }');
    newList.append('{ b }');
    newList.insertBefore('{ b }','{ c }');
    expect(newList.toString()).toEqual('{ a } -> { c } -> { b } -> NULL');
  });
  test('Insert a node before the first node of a linked list',()=>{
    let newList = new LinkedList();
    newList.append('{ a }');
    newList.append('{ b }');
    newList.insertBefore('{ a }','{ c }');
    expect(newList.toString()).toEqual('{ c } -> { a } -> { b } -> NULL');
  });
  test('Insert after a node in the middle of the linked list',()=>{
    let newList = new LinkedList();
    newList.append('{ a }');
    newList.append('{ b }');
    newList.insertAfter('{ a }','{ c }');
    expect(newList.toString()).toEqual('{ a } -> { c } -> { b } -> NULL');
  });
  test('Insert a node after the last node of the linked list',()=>{
    let newList = new LinkedList();
    newList.append('{ a }');
    newList.append('{ b }');
    newList.insertAfter('{ b }','{ c }');
    expect(newList.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
  });
  test('Add multiple nodes to the end of the linked list',()=>{
    let newList = new LinkedList();
    newList.append('{ a }');
    newList.append('{ b }');
    newList.append('{ c }');
    expect(newList.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
    newList.delete('{ b }');
    expect(newList.toString()).toEqual('{ a } -> { c } -> NULL');
  });
});
