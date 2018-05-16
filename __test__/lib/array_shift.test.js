'use strict'

let insertShiftArray = require('../../array_shift.js');

describe('Array Shift', () => {
  it('insertShiftArray([1,2,3,4], 7)', () => {
    let newArray = insertShiftArray([1,2,3,4], 7);
    expect(newArray).toEqual([1,2,7,3,4]);
  });
});