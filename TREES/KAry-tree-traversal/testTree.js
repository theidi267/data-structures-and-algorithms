'use strict';

class KAryTree {
  constructor (root) {
    this.root = root;
  }
}
class KAryNode {
  constructor(value = null) {
    this.value = value;
    this.children = [];
    this.new = 0;
    this.old = 0;
  }

  appendChild(value) {
    const nodeToAppend =  new KAryNode(value);
    this.children.push(nodeToAppend);
  }
}

let two = new KAryNode(2),
  four = new KAryNode(4),
  five = new KAryNode(5),
  six = new KAryNode(6),
  three = new KAryNode(3),
  nine = new KAryNode(9),
  seven = new KAryNode(7),
  one = new KAryNode(1),
  het = new KAryNode(7),
  ot = new KAryNode(5),
  hat = new KAryNode(6);
let testTree = new KAryTree(two);  

two.children = [four, five, six];
four.children = [three, nine];
three.children = [];
nine.children = [seven];
seven.children = [];
five.children = [one];
one.children = [];
six.children = [het, ot, hat];
het.children = [];
ot.children = [];
hat.children = [];

module.exports = testTree;