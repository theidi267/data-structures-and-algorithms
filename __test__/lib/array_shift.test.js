'use strict';

let insertShiftArray = require('../../array_shift.js');

describe('Array Shift', () => {
  it('insertShiftArray([1,2,3,4], 7)', () => {
    let newArray = insertShiftArray([1,2,3,4], 7);
    expect(newArray).toEqual([1,2,7,3,4]);
  });
});

describe('Array Shift', () => {
  it('insertShiftArray([banana,7,slugbug], 2)', () => {
    let newArray = insertShiftArray(['banana',7,'slugbug'], 2);
    expect(newArray).toEqual(['banana',7,2,'slugbug']);
  });
});

describe('Array Shift', () => {
  it('insertShiftArray([1,9,7], 2)', () => {
    let newArray = insertShiftArray([1, 9, 7], 2);
    expect(newArray).toEqual([1,9,2,7]);
  });
});