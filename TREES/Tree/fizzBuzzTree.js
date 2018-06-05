'use strict';

function fizzBuzzTree(tree) {

  function intFizzBuzz(node){

    if (!node) return undefined;
    if (node.value % 3 === 0 && node.value % 5) node.value = 'FizzBuzz';
    else if (node.value % 3 === 0) node.value = 'Fizz';
    else if (node.value % 5 === 0) node.value = 'Buzz';

    if (node.left) intFizzBuzz(node.left);
    if (node.right) intFizzBuzz(node.right);
  }
  intFizzBuzz(tree.root);
  return tree;
}

module.exports = fizzBuzzTree;