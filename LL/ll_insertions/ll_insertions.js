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
    let newNode = newValue
    if(this.head === value){
      this.head = this.head.next;
      newNalue = this.head;
    }
    let prevNode = this.head;
    let currentNode = this.head.next;
    while(currentNode.next){
      if (currentNode.value === value){
        newNode.next = currentNode.next;
      }
      break;
    }
    return this;
  }

  insertAfter(value, newValue){
    let currentNode = this.head;
    let nextNode = currentNode.next;
    let newNode = newValue;
    while(currentNode.next){
      if(currentNode.value === value){
        currentNode.next = newNode;
        newNode.next = nextNode;
      }
      break;
    }
    return this;
  }
}