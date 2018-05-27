'use stict';

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
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

var testList = new LinkedList();

testList.add(2);
testList.add(3);
testList.add(5);
testList.add(7);
testList.add(11);
// console.log(testList);

module.exports = LinkedList;