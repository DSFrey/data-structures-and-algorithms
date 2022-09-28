'use strict';

// Require our linked list implementation
const LinkedList = require('../index');
const { zipSort } = require('../linked-list-zip');
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
  test('ZipSort where lists of equal length', () => {
    let list1 = new LinkedList();
    list1.append('{ 1 }');
    list1.append('{ 3 }');
    list1.append('{ 4 }');
    let list2 = new LinkedList();
    list2.append('{ 2 }');
    list2.append('{ 5 }');
    list2.append('{ 6 }');
    expect(zipSort(list1, list2).toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> NULL');
  });
  test('Zip where list1 is longer', () => {
    let list1 = new LinkedList();
    list2.append('{ 1 }');
    list2.append('{ 4 }');
    list2.append('{ 5 }');
    list2.append('{ 6 }');
    let list2 = new LinkedList();
    list1.append('{ 2 }');
    list1.append('{ 3 }');
    expect(zipSort(list1, list2).toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> NULL');
  });
  test('Zip where list2 is longer', () => {
    let list1 = new LinkedList();
    list1.append('{ 2 }');
    list1.append('{ 3 }');
    let list2 = new LinkedList();
    list2.append('{ 1 }');
    list2.append('{ 4 }');
    list2.append('{ 5 }');
    list2.append('{ 6 }');
    expect(zipSort(list1, list2).toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> NULL');
  });
  test('ZipSort where lists have equal values', () => {
    let list1 = new LinkedList();
    list1.append('{ 1 }');
    list1.append('{ 3 }');
    list1.append('{ 4 }');
    let list2 = new LinkedList();
    list2.append('{ 3 }');
    list2.append('{ 4 }');
    list2.append('{ 6 }');
    expect(zipSort(list1, list2).toString()).toEqual('{ 1 } -> { 3 } -> { 3 } -> { 4 } -> { 4 } -> { 6 } -> NULL');
  });
});
