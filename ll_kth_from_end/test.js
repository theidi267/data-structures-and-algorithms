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
  
  kthFromEnd(k) {
   var index = this.length-1;
   var current = this.head;
   var previous = null;

   while (current) {
     if (k === index) {
         console.log(`found it: ${current.value}`);
         return current;
     }
     var next = current.next;
     current.next = previous;
     previous = current;
     current = next;
     index--;
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

ll.add(3);
ll.add(2);
ll.add(7);
ll.add(9);
console.log(ll.kthFromEnd(0));