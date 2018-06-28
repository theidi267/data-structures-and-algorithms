'use strict';

let Testcase = require ('../index.js'); 
let BreadthFirstTraversal = require ('../tree_intersection.js');

describe ('Tree intersection', () => {

  let bft = new BreadthFirstTraversal();

  let testTree1 = bft.breadthFirstTraversal(Testcase.tree1);
  let testTree2 = bft.breadthFirstTraversal(Testcase.tree2);

  it('returns common elements', () => {

    let outputArr = bft.findDups(testTree1, testTree2);
    expect(outputArr[0]).toEqual(100);
    expect(outputArr[6]).toEqual(500);
  });
  
  it('returns only common elements', () => {
    
    let outputArr = bft.findDups(testTree1, testTree2);
    expect(outputArr.length).toEqual(7);
  }); 
});