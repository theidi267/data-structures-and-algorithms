'use strict';

let ourfunction = require('../ll_kth_from_end.js');
let constructor = require('../../LLconstructor/constructor.js');


describe('Identify n-th node from end', () => {

  it('Identify k-th in a LL, list of 5 nodes', () => {  
    
    let testList = new constructor();    
    testList.add(2);
    testList.add(3);
    testList.add(5);
    testList.add(7);
    testList.add(11);
    let result = ourfunction(testList, 2);  
    expect(result).toEqual(5);
  });
});

describe('Identify n-th node from end', () => {
  it('Identify k-th in a LL, list of 5 nodes', () => {  
   
    let testList = new constructor();    
    testList.add(2);
    testList.add(3);
    testList.add(5);
    testList.add(7);
    testList.add(11);
    let result = ourfunction(testList, 0);
    expect(result).toEqual(11);
  });
});

describe('Identify n-th node from end', () => {
  it('Identify k-th in a LL, list of 5 nodes', () => {  
   
    let testList = new constructor();    
    testList.add(2);
    testList.add(3);
    testList.add(5);
    testList.add(7);
    testList.add(11);
    let result = ourfunction(testList, 4);
    expect(result).toEqual(2);
  });
});

describe('Identify n-th node from end', () => {
  it('Identify k-th in a LL, list of 5 nodes', () => {  
   
    let testList = new constructor();    
    testList.add(2);
    testList.add(3);
    testList.add(5);
    testList.add(7);
    testList.add(11);
    let result = ourfunction(testList, 5);    
    expect(result).toEqual(2);
  });
});