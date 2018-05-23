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
  
  mergeList(LL1, LL2) {
   var LLcoolJ = new LL();
   var currentNode1 = LL1.head;
   var currentNode2 = LL2.head;

   while (currentNode1 || currentNode2) {
     LLcoolJ.append(currentNode1);
      currentNode1 = currentNode1.next 
    LLcoolJ.append(currentNode2);
      currentNode2 = currentNode2.next    
   }
   return LLcoolJ
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