'use strict';

const { BinaryTree, Node } = require('../../trees');
const { inOrderCallback, treeIntersection } = require('../tree-intersection');

const tree1 = new BinaryTree();
tree1.root = new Node(1);
tree1.root.left = new Node(2);
tree1.root.right = new Node(3);
tree1.root.left.left = new Node(4);
tree1.root.left.right = new Node(5);
tree1.root.right.left = new Node(6);
tree1.root.right.right = new Node(7);

const tree2 = new BinaryTree();
tree2.root = new Node(1);
tree2.root.left = new Node(21);
tree2.root.right = new Node(3);
tree2.root.left.left = new Node(4);
tree2.root.left.right = new Node(52);
tree2.root.right.left = new Node(69);
tree2.root.right.right = new Node(7);

const tree3 = new BinaryTree();
tree3.root = new Node(100);
tree3.root.left = new Node(200);
tree3.root.right = new Node(300);
tree3.root.left.left = new Node(400);
tree3.root.left.right = new Node(500);
tree3.root.right.left = new Node(600);
tree3.root.right.right = new Node(700);

describe('treeIntersection works properly', () => {
  test('inOrderCallback runs a callback function on each value in a tree', () => {
    let result = [];
    inOrderCallback(tree1, (value) => result.push(value + 1));

    expect(result).toContainEqual(2, 3, 4, 5, 6, 7, 8);
  });

  test('treeIntersection finds common values in two trees', () => {
    expect(treeIntersection(tree1, tree2)).toContainEqual(1,3,4,7);
  });
  test('treeIntersection returns an empty array when there are no common values', () => {
    expect(treeIntersection(tree1, tree3)).toEqual([]);
  });
  test('treeIntersection returns an empty array when the trees are empty', () => {
    expect(treeIntersection(new BinaryTree(), new BinaryTree())).toEqual([]);
  });
});

