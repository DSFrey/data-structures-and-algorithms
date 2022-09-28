'use strict';

// Require our linked list implementation
const LinkedList = require('../index');
const { zipLists } = require('../linked-list-zip');

describe('Linked List Zip', () => {
  test('Zip lists of equal length', () => {
    let list1 = new LinkedList();
    list1.append('{ a }');
    list1.append('{ b }');
    let list2 = new LinkedList();
    list2.append('{ 1 }');
    list2.append('{ 2 }');
    expect(zipLists(list1, list2).toString()).toEqual('{ a } -> { 1 } -> { b } -> { 2 } -> NULL');
  });
  test('Zip where list1 is longer', () => {
    let list1 = new LinkedList();
    list1.append('{ a }');
    list1.append('{ b }');
    list1.append('{ c }');
    list1.append('{ d }');
    let list2 = new LinkedList();
    list2.append('{ 1 }');
    list2.append('{ 2 }');
    expect(zipLists(list1, list2).toString()).toEqual('{ a } -> { 1 } -> { b } -> { 2 } -> { c } -> { d } -> NULL');
  });
  test('Zip where list2 is longer', () => {
    let list1 = new LinkedList();
    list1.append('{ a }');
    list1.append('{ b }');
    let list2 = new LinkedList();
    list2.append('{ 1 }');
    list2.append('{ 2 }');
    list2.append('{ 3 }');
    list2.append('{ 4 }');
    expect(zipLists(list1, list2).toString()).toEqual('{ a } -> { 1 } -> { b } -> { 2 } -> { 3 } -> { 4 } -> NULL');
  });
  test('Zip lists where list is empty', () => {
    let emptyList = new LinkedList;
    let list2 = new LinkedList();
    list2.append('{ 1 }');
    list2.append('{ 2 }');
    expect(zipLists(emptyList, list2).toString()).toEqual('{ 1 } -> { 2 } -> NULL');
  });
});
