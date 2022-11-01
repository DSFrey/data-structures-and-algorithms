'use strict';

const Hashtable = require('.');

function treeIntersection(tree1, tree2) {
  let table = new Hashtable(32);
  let intersection = [];
  let traverse1 = (node) => {
    table.set(node.value, 'banana');
    if (node.left) traverse1(node.left);
    if (node.right) traverse1(node.right);
  };
  let traverse2 = (node) => {
    if (table.has(node.value)) intersection.push(node.value);
    if (node.left) traverse2(node.left);
    if (node.right) traverse2(node.right);
  };
  traverse1(tree1.root);
  traverse2(tree2.root);
  return intersection;
}

module.exports = treeIntersection;
