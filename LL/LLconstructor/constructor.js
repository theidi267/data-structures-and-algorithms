'use stict';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value) {
    var node = new Node(value);
    if (this.head == null) {
      this.head = node;
      this.length++;
    } else {
      var current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.length++;
    }
  }

  append(value) { 

    let node = new Node(value);   
    if(! this.head) {
      this.head = node;
      this.length++;
      return this;
    }    
    let currentNode = this.head; 
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.length++;
    return this;
  }

  remove(value){ // Big O(1)
    if (this.head.value === value){
      this.head = this.head.next;
      this.length--;
    }
    let prevNode = this.head;
    let currentNode = this.head.next;
    while(currentNode){
      if(currentNode.value === value){
        prevNode.next = currentNode.next;
        currentNode = currentNode.next;
        this.length--;
        break;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    return this;
  }

}

module.exports = LinkedList;