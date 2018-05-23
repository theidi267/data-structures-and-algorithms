function kthFromEnd(k) {

  if (k > this.length) return 'Exception';

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
