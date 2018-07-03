'use strict';

function reverseArray(array) {

  let newArray = [];
  let counter = 0;

  for (var i=array.length -1; i>=0; i--){
   
    newArray[counter] = array[i];

    counter++;    
  }
  return newArray;
}

module.exports = reverseArray;
