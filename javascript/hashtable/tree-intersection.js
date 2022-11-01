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
  if (!tree1.root || !tree2.root) return [];
  let table = new Hashtable(32);
  let intersection = [];
  inOrderCallback(tree1, (value) => {
    table.set(`${value}`);
  });
  inOrderCallback(tree2, (value) => {
    if (table.has(`${value}`)) intersection.push(value);
  });
  return intersection;
}

module.exports = { inOrderCallback, treeIntersection };
