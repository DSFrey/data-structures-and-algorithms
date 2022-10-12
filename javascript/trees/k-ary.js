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

