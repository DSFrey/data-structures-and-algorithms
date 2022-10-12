'use strict';

const { KaryTree, KaryNode, fizzBuzzTree } = require('../k-ary');

describe('fizzBuzzTree function works as expected', ()=>{
  let testTree = new KaryTree();
  testTree.root = new KaryNode(10);
  testTree.root.addChild(8);
  testTree.root.addChild(12);
  testTree.root.addChild(11);
  testTree.root.children[0].addChild(15);
  testTree.root.children[0].addChild(0);
  testTree.root.children[1].addChild(5);

  let resultTree = new KaryTree();
  resultTree.root = new KaryNode('Buzz');
  resultTree.root.addChild('8');
  resultTree.root.addChild('Fizz');
  resultTree.root.addChild('11');
  resultTree.root.children[0].addChild('FizzBuzz');
  resultTree.root.children[0].addChild('FizzBuzz');
  resultTree.root.children[1].addChild('Buzz');

  test('Gives correct result tree', () => {
    expect(fizzBuzzTree(testTree)).toEqual(resultTree);
  });

  test('Handles empty input tree', () => {
    let emptyTree = new KaryTree();
    expect(fizzBuzzTree(emptyTree)).toEqual(emptyTree);
  });
});
