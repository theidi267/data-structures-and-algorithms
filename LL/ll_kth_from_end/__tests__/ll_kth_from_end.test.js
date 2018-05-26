'use strict';

const kthFromEnd = require('../ll_kth_from_end.js');
const listConst = require('../../LLconstructor/constructor.js');

describe('Identify n-th node from end', () => {
  it('Identify k-th in a LL, list of 5 nodes')
  let myList = new LinkedList();
  myList.add(2);
  myList.add(3);
  myList.add(5);
  myList.add(7);
  myList.add(11);
  let returnValue = myList.kthFromEnd(2);
  expect(returnvalue).toEqual(5);
});



