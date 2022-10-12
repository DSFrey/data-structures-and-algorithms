'use strict';

const { Node, BinaryTree } = require('..');

describe('Binary Tree works as expected', () => {
  test('Instantiate an empty tree', () => {
    let newTree = new BinaryTree();
    expect(newTree).toBeTruthy();
  });
  test('Instantiate a tree with a single root node', () => {
    let newTree = new BinaryTree();
    newTree.root = new Node(2);
    expect(newTree.root.value).toEqual(2);
  });
  let tree = new BinaryTree();
  tree.root = new Node(1);
  tree.root.left = new Node(2);
  tree.root.right = new Node(3);
  tree.root.left.left = new Node(4);
  tree.root.left.right = new Node(5);
  tree.root.right.left = new Node(6);
  tree.root.right.right = new Node(7);
  test('Return a collection from a preorder traversal', () => {
    expect(tree.preOrder()).toEqual([1, 2, 4, 5, 3, 6, 7]);
  });
  test('Return a collection from a inOrder traversal', () => {
    expect(tree.inOrder()).toEqual([4, 2, 5, 1, 6, 3, 7]);
  });
  test('Return a collection from a postorder traversal', () => {
    expect(tree.postOrder()).toEqual([4, 5, 2, 6, 7, 3, 1]);
  });
  test('Return the maximum value in the tree', () => {
    expect(tree.maxValue()).toEqual(7);
    let negativeTree = new BinaryTree();
    negativeTree.root = new Node(-12);
    negativeTree.root.left = new Node(-2);
    negativeTree.root.right = new Node(-53);
    expect(negativeTree.maxValue()).toEqual(-2);
  });
  test('Max value returns exception if the tree is empty', ()=>{
    let emptyTree = new BinaryTree();
    expect(() => emptyTree.maxValue()).toThrow('Tree is empty');
  });
});
