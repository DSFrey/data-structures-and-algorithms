'use strict';

const { SearchTree } = require('..');

describe('Binary Search Tree works as expected', () => {
  test('Can properly add to the tree',()=>{
    let tree = new SearchTree();
    tree.add(5);
    tree.add(3);
    tree.add(7);
    tree.add(1);
    tree.add(9);
    expect(tree.root.value).toEqual(5);
    expect(tree.root.left.value).toEqual(3);
    expect(tree.root.left.left.value).toEqual(1);
    expect(tree.root.right.value).toEqual(7);
    expect(tree.root.right.right.value).toEqual(9);
  });
  test('Contains method works porperly', ()=>{
    let tree = new SearchTree();
    tree.add(5);
    tree.add(3);
    tree.add(7);
    expect(tree.contains(3)).toEqual(true);
    expect(tree.contains(7)).toEqual(true);
    expect(tree.contains(0)).toEqual(false);
    expect(tree.contains(4)).toEqual(false);
  });
});
