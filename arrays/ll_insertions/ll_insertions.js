'use strict';

class LinkedList {

  constructor() {
    this.head = null;
  }

  append(value){

    let node = value;
    if(!this.head){
      this.head = node;
    }

    let currentNode = this.head;
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode = node;
    return this;
  }

  insertBefore(value, newValue){
    if(this.head === value){
      this.head = this.head.next;
      value = this.head;
    }
    let prevNode = this.head;
    let currentNode = this.head.next;
    while(currentNode){
      if (currentNode === value){
        newValue.next = currentNode.next;
        prevNode.next = newValue;
      }
      break;
    }
    return this;
  }

  insertAfter(value, newValue){
    let currentNode = this.head;
    let nextNode = this.head.next;
    while(currentNode){
      if(currentNode.value === value){
        currentNode.next = newValue;
        newValue.next = nextNode;
      }
      break;
    }
    return this;
  }
}