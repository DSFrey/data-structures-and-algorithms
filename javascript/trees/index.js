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
    const traverse = (node) => {
      console.log(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
  }
  inOrder() {
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      console.log(node);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
  }
  postOrder() {
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      console.log(node);
    };
    traverse(this.root);
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
          currentNode.left = new Node(value);
          return;
        }
      }
      if (value > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
          search(value);
        } else {
          currentNode.right = new Node(value);
          return;
        }
      }
    };
    search(newValue);
  }

  contains(searchValue) {
    let currentNode = this.root;
    let search = (value) => {
      if (value === currentNode.value) return true;
      if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
          search(value);
        } else {
          return false;
        }
      }
      if (value > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
          search(value);
        } else {
          return false;
        }
      }
    };
    return search(searchValue);
  }
}

module.exports = { BinaryTree, SearchTree };
