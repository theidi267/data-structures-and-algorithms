'use strict';

function kthFromEnd(LL, k) {

  let reqEl = LL.length-1-k; 
  let runner = LL.head;
  
  for (var i=0; i<reqEl; i++) {

    runner = runner.next;
  }
  return runner.value;
}

module.exports = kthFromEnd;