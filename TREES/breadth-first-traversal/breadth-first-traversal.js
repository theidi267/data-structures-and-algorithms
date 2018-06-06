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
class Queue {
  constructor(){
    this.old = 0;
    this.new = 0;
    this.data = {};
  }
} 
let two = new Node(2),
  seven = new Node(7),
  secondtwo = new Node(2),
  six = new Node(6),
  five = new Node(5),
  eleven = new Node(11),
  secondfive = new Node(5),
  nine = new Node(9),
  four = new Node(4);
let testTree = new BinaryTree(two);  

two.left = seven;
two.right = secondfive;
seven.left = secondtwo;
seven.right = six;
secondtwo.left = null;
secondtwo.right = null; 
six.left = five;
six.right = eleven;
five.left = null;
five.right = null; 
eleven.left = null;
eleven.right = null;
secondfive.left = null;
secondfive.right = nine;
nine.left = four;
nine.right = null;
four.left = null;
four.right = null;

// console.log(testTree.root);

var rootNode = testTree.root;

function breadthFirstTrav(tree){

  var rootNode = testTree.root;

  function level(rootNode) {

    console.log(rootNode);
  
    if (rootNode === null) {
      return;
    }
    console.log(rootNode);
  
    let thisQueue = [];
    thisQueue.enqueue(rootNode);
  
    while (thisQueue) {

      let currentNode = thisQueue.new[1];
    
      if (currentNode.left !== null) {
        thisQueue.enqueue(currentNode.left);
      }

      if (currentNode.right !== null) {
        thisQueue.enqueue(currentNode.right);
      }
      console.log(currentNode);
      thisQueue.dequeue();
    }
  }
  level(rootNode);
}
breadthFirstTrav(testTree);