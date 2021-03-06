'use strict';

const findMaxValue = (tree) => {

  if (!tree.root) {
    return undefined;
  }
 
  let max = tree.root.value;

  const preOrderTraversal = (rootNode) => {
    if (!rootNode) {
      return undefined;
    }

    if (rootNode.value > max) {
      max = rootNode.value;
    }

    preOrderTraversal(rootNode.left);
    preOrderTraversal(rootNode.right);

    return undefined;   
  };

  preOrderTraversal(tree.root);
  return max;
};

module.exports = findMaxValue;