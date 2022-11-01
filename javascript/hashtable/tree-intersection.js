'use strict';

const Hashtable = require('.');

function inOrderCallback(tree, callback) {
  let traverse = (node) => {
    if (node.left) traverse(node.left);
    callback(node.value);
    if (node.right) traverse(node.right);
  };
  traverse(tree.root);
}

function treeIntersection(tree1, tree2) {
  let table = new Hashtable(32);
  let intersection = [];
  // let traverse1 = (node) => {
  //   table.set(node.value);
  //   if (node.left) traverse1(node.left);
  //   if (node.right) traverse1(node.right);
  // };
  // let traverse2 = (node) => {
  //   if (table.has(node.value)) intersection.push(node.value);
  //   if (node.left) traverse2(node.left);
  //   if (node.right) traverse2(node.right);
  // };
  inOrderCallback(tree1, (value) => table.set(value));
  inOrderCallback(tree2, (value) => {
    if (table.has(value)) intersection.push(value);
  });
  return intersection;
}

module.exports = treeIntersection;
