'use strict';

const binarySearch = require('../array_binary_search.js');

describe('Binary Search', () => {

  it('binarySearch, key is not oin array([1,2,3,4], 7)', () => {
    let returnvalue = binarySearch([1,2,3,4], 7);
    console.log(returnvalue);
    expect(returnvalue).toEqual(-1);
  });

  it('binarySearch, key is the middle of array ([3,7,9], 7)', () => {
    let returnvalue = binarySearch([3,7,9], 7);
    expect(returnvalue).toEqual(1);
  });

  it('binarySearch, key is in the array ([1,2,4,9], 1)', () => {
    let returnvalue = binarySearch([1, 2, 4, 9], 1);
    expect(returnvalue).toEqual(0);
  });

});