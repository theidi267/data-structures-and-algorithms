'use strict';

function binarySearch(arr, key) {

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {

    const mid = start + Math.floor((end - start) / 2);
    
    if (arr[mid] === key) {
      return mid;
    }
    if (arr[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

module.exports = binarySearch;
