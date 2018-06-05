'use strict';

let Node = require ('../../../TREES/Tree-constructor/constructor.js');
let Tree = require ('../../../TREES/Tree-constructor/constructor.js');

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


  let tree = testTree;
  ourFunction(tree);
  expect(one.right.value).toEqual('Fizz');
  expect(three.right.value).toEqual('FizzBuzz');
  expect(two.left.value).toEqual('Buzz');  
});