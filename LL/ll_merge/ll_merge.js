'use strict';

let LinkedList = require('../LLconstructor/constructor.js');

function mergeList(ll1, ll2) {
  var LLcoolJ = new LinkedList();
  var currentNode1 = ll1.head;
  var currentNode2 = ll2.head;

  while (currentNode1 || currentNode2) {
    LLcoolJ.append(currentNode1.value);
    currentNode1 = currentNode1.next; 
  
    LLcoolJ.append(currentNode2.value);
    currentNode2 = currentNode2.next;  
  
  }
  return LLcoolJ;
} 

module.exports = mergeList;