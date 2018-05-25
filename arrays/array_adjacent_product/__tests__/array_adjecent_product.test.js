'use strict';

const getHighestAdjecentNumbers = require('../array_adjacent_product.js');

describe('Get the highest product of adjecent values in a 2D array', () => {

  it('getHighestAdjecentNumbers, sequential array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])', () => {
    let returnvalue = getHighestAdjecentNumbers([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(returnvalue).toEqual(72);
  });

  it('getHighestAdjecentNumbers, empty array ([[5, 6, 3], [2, 9, 9], [4, 4, 4]])', () => {
    let returnvalue = getHighestAdjecentNumbers([[5, 6, 3], [2, 9, 9], [4, 4, 4]]);
    expect(returnvalue).toEqual(81);
  });

  it('getHighestAdjecentNumbers, high value array ([[55, 66, 33], [22, 99, 99], [44, 44, 44]])', () => {
    let returnvalue = getHighestAdjecentNumbers([[55, 66, 33], [22, 99, 99], [44, 44, 44]]);
    expect(returnvalue).toEqual(9801);
  });

});