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

}
