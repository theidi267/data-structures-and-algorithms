'use strict';

let quicksortBasic = require('../radix.js');

describe('Sorts simple array', () => {
  it('array to sort ([9, 2, 5, 6, 4, 3, 7, 10, 1, 8])', () => {
    let newArray = quicksortBasic([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]);
    expect(newArray).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);
  });

  it('Sorts array with high', () => {
    let newArray = quicksortBasic([2, 777, 2008, 7, 9]);
    expect(newArray).toEqual([2, 7, 9, 777, 2008]);
  });

  it('If array is a single integer, returns array', () => {
    let newArray = quicksortBasic([9]);
    expect(newArray).toEqual([9]);
  });
});
