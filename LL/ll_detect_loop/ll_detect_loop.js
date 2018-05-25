'use strict';

function hasLoop(){

  var isloop = false,
    current1 = this.head,
    current2 = this.head;

  while(current2.next){
    current1 = current1.next;
    current2 = current2.next.next;

    if(current1 === current2){
      isloop = true;
    }
  }
  return isloop;
}
hasLoop();
