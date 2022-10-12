'use strict';

class KaryNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(value) {
    this.children.push(new this.constructor(value));
  }
}

class KaryTree {
  constructor() {
    this.root = null;
  }
}

function fizzBuzzTree(originalTree) {
  if (originalTree.root === null) return new KaryTree();

  let newTree = new KaryTree();
  let fizzBuzz = (value) => {
    if (!(value % 3) && !(value % 5)) return 'FizzBuzz';
    if (!(value % 3)) return 'Fizz';
    if (!(value % 5)) return 'Buzz';
    return `${value}`;
  };

  newTree.root = new KaryNode(fizzBuzz(originalTree.root.value));

  let traverse = (oldNode, newNode) => {
    for (let i = 0; i < oldNode.children.length; i++) {
      newNode.addChild(fizzBuzz(oldNode.children[i].value));
      traverse(oldNode.children[i], newNode.children[i]);
    }
  };
  traverse(originalTree.root, newTree.root);
  return newTree;
}

module.exports = { KaryNode, KaryTree, fizzBuzzTree };
