'use strict';

let Queue = require('../../Queue/queue.js');
let testTree = require('./testTree.js');

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

class KAryTree {
  constructor (root) {
    this.root = root;
  }  
}

var rootNode = testTree.root;

function breathFirstTraversal(tree){

  console.log(tree);

  function breathFirstTraversalHelper(rootNode) {
  
    if (rootNode === null) {
      return;
    }
    
    let thisQueue = new Queue;
    console.log(testTree.root);
    thisQueue.enqueue(testTree.root);

    while (thisQueue) {

      console.log(thisQueue);

      let currentNode = thisQueue.new[1];

      if (currentNode.children.length !== null){
        for (var i=0; i< currentNode.children.length; i++){
          thisQueue.enqueue(currentNode.children[i]);
        }
      }
      console.log('current node', currentNode);
      thisQueue.dequeue();
    }
  }
  breathFirstTraversalHelper(rootNode);
}

breathFirstTraversal(testTree);




module.exports = KAryNode;
module.exports = KAryTree;