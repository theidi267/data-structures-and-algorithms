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

var ll = new LinkedList();

ll.add(2);
ll.add(3);
ll.add(5);
ll.add(7);
ll.add(11);
console.log(ll.kthFromEnd(0));

module.require = new LinkedList;