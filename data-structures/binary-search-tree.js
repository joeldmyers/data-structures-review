class Node(val) {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;

  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val) {
    var newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while(true) {
      if (val < currentNode.val) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      } else  if (val > currentNode.val) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }

    }


  }
}
