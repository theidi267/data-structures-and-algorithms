'use strict';

class BinaryTree {

  constructor(root = null) {
    this.root = root;
  }
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

module.exports = BinaryTree;
module.exports = Node;
