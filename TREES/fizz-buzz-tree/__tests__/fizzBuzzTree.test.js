'use strict';

let Node = require ('../../Tree-constructor/binary-node.js');
let Tree = require ('../../Tree-constructor/binary-tree.js');

let ourFunction = require ('../fizzBuzzTree.js');

describe ('FizzBuzz binary tree', () => {
  let one = new Node(1),
    two = new Node(2),
    three = new Node(3),
    five = new Node(5),
    ten = new Node(10),
    twelve = new Node(12),
    fifteen = new Node(15);
  let testTree = new Tree(one);  //eslint-disable-line

  one.left = two;
  one.right = three;
  two.left = five;
  two.right = ten;
  three.left = twelve;
  three.right = fifteen; 


  it('changes the 3 and 12 to Fizz', () => {
    let tree = testTree;
    ourFunction(tree);
    expect(three.value).toEqual('Fizz');
    expect(twelve.value).toEqual('Fizz');
  });
  
  it('changes the 5 and 10 to Buzz', () => {
    let tree = testTree;
    ourFunction(tree);
    expect(two.left.value).toEqual('Buzz');
    expect(ten.value).toEqual('Buzz'); 
  });
  
  it('changes the 15 to FizzBuzz', () => {
    let tree = testTree;
    ourFunction(tree);
    expect(three.right.value).toEqual('FizzBuzz');
  }); 
});