'use strict';

const binarySearch = require('../array_binary_search.js');

describe('Binary Search', () => {

  it('binarySearch([1,2,3,4], 7)', () => {
    let returnvalue = binarySearch([1,2,3,4], 7);
    console.log(returnvalue);
    expect(returnvalue).toEqual(-1);
  });

  it('binarySearch([3,7,9], 7)', () => {
    let returnvalue = binarySearch([3,7,9], 7);
    expect(returnvalue).toEqual(7);
  });

  it('binarySearch([1,9,7,2], 2)', () => {
    let returnvalue = binarySearch([1, 9, 7], 2);
    expect(returnvalue).toEqual(2);
  });

});