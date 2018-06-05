'use strict';

function fizzBuzzTree(tree) {

  if (!root) return undefined;
  if (root.value % 3 === 0 && root.value % 5) return 'FizzBuzz';
  if (root.value % 3 === 0) return 'Fizz';
  if (root.value % 5 === 0) return 'Buzz';

  fizzBuzzTree(root.left);
  fizzBuzzTree(root.right);
}

export default fizzBuzzTree;