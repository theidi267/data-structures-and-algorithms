'use strict';

let Node = require ('../../Tree-constructor/binary-node.js');
let Tree = require ('../../Tree-constructor/binary-tree.js');

let ourFunction = require ('../maximum-value-binary-tree.js');

describe ('maximum-value-binary-tree', () => {
  let one = new Node(1),
    two = new Node(2),
    three = new Node(3),
    five = new Node(5),
    ten = new Node(10),
    twelve = new Node(12),
    fifteen = new Node(15);
  let testTree = new Tree(one);  

  one.left = two;
  one.right = three;
  two.left = five;
  two.right = ten;
  three.left = twelve;
  three.right = fifteen; 

  it('returns highest value', () => { 
    let tree = testTree;
    let val = ourFunction(tree);
    expect(val).toEqual(15);
  });
});