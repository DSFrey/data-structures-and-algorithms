class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let output = [];
    const traverse = (node) => {
      output.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return output;
  }
  inOrder() {
    let output = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      output.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return output;
  }
  postOrder() {
    let output = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      output.push(node.value);
    };
    traverse(this.root);
    return output;
  }
}

class SearchTree extends BinaryTree {
  add(newValue) {
    let currentNode = this.root;
    let search = (value) => {
      if (value === currentNode.value) throw new Error('Value already exists');
      if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
          search(value);
        } else {
          currentNode.left = new Node(newValue);
          return;
        }
      }
      if (value > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
          search(value);
        } else {
          currentNode.right = new Node(newValue);
          return;
        }
      }
    };
    if (currentNode) {
      search(newValue);
    } else {
      this.root = new Node(newValue);
    }
  }

  contains(searchValue) {
    let currentNode = this.root;
    let search = (value) => {
      if (value === currentNode.value) return true;
      if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
          return search(value);
        } else {
          return false;
        }
      }
      if (value > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
          return search(value);
        } else {
          return false;
        }
      }
    };
    return search(searchValue);
  }
}

module.exports = { Node, BinaryTree, SearchTree };
