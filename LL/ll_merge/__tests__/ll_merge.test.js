'use strict';

let ourfunction = require('../ll_merge.js');
let LinkedList = require('../../LLconstructor/constructor.js');

describe('Merges two linked lists', () => {

  let testListOne = new LinkedList();    
  testListOne.add(2);
  testListOne.add(4);
  testListOne.add(6);
  testListOne.add(8);
  testListOne.add(10);

  let testListTwo = new LinkedList();    
  testListTwo.add(1);
  testListTwo.add(3);
  testListTwo.add(5);
  testListTwo.add(7);
  testListTwo.add(11);

  it('Merges lists', () => {

    let result = ourfunction(testListTwo, testListOne);  
    console.log('merged list', result);

    expect(result.length).toEqual(10);
  });

  it('Merges alternating from both input lists', () => {
   
    let result = ourfunction(testListTwo, testListOne);
    expect(result.head.next.next.value).toEqual(3);
  });

  it('Merges alternating from both input lists', () => {
   
    let result = ourfunction(testListTwo, testListOne);
    expect(result.head.next.next.next.value).toEqual(4);
  });
});