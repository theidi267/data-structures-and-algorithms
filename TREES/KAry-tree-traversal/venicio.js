//   breathFirstTraversal(tree) {
//     if(!this.root) {
//       return null;
//     }

//     return this.breathFirstTraversalHelper(this.root);
//   }

//   breathFirstTraversalHelper(root) {
    
//     let thisQueue = [];
//     thisQueue.enqueue(root);

//     while (thisQueue) {

//       let currentNode = thisQueue.new[1];

//       if (currentNode.children.length !== null){
//         for (var i=0; i< currentNode.children.length; i++){
//           thisQueue.enqueue(currentNode.children[i]);
//         }
//       }
//       console.log(currentNode);
//       thisQueue.dequeue();
//     }
//   }

//   depthFirstTraversalHelper(root) {
   
//     const stack = [];
//     // while the queue is not empty
//     // dequeue one element
//     // enqueue all its children into queue
//     // print/visit the node you just dequeued
//   }
// }