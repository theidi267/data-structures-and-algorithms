'use strict';


function getHighestAdjacentNumbers(array) {

  var highestAdjNums = 0;

  for (var i = 0; i < array.length; i++) {
    if (typeof array[i-1] !== 'undefined') {

      for (var j = 0; j < array[i].length; j++) {
        var currentNum = array[i][j];
        
        var topLeft = array[i-1][j-1] * currentNum;
        if (topLeft > highestAdjNums) {
          highestAdjNums = topLeft;
        }

        var topMid = array[i-1][j] * currentNum;
        if (topMid > highestAdjNums) {
          highestAdjNums = topMid;
        }

        var topRight = array[i-1][j+1] * currentNum;
        if (topRight > highestAdjNums) {
          highestAdjNums = topRight;
        }

        var midLeft = array[i][j-1] * currentNum;
        if (midLeft > highestAdjNums) {
          highestAdjNums = midLeft;
        }

        var midRight = array[i][j+1] * currentNum;
        if (midRight > highestAdjNums) {
          highestAdjNums = midRight;
        }

        if (typeof array[i+1]!== 'undefined') {
          var bottomLeft = array[i+1][j-1] * currentNum;
          if (bottomLeft > highestAdjNums) {
            highestAdjNums = bottomLeft;
          }
        }

        if (typeof array[i+1]!== 'undefined'){
          var bottomMid = array[i+1][j] * currentNum;
          if (bottomMid > highestAdjNums) {
            highestAdjNums = bottomMid;
          }
        }

        if (typeof array[i+1]!== 'undefined'){
          var bottomRight = array[i+1][j+1] * currentNum;
          if (bottomRight > highestAdjNums) {
            highestAdjNums = bottomRight;
          }
        }
      }
    }
  }  
  return highestAdjNums;
}

module.exports = getHighestAdjacentNumbers;