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
    const newNode = new Node(val);

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
      } else {
        // equivalent to node, so duplicate
        console.log('duplicate value');
        return false;
      }
    }
  }

  find(val) {
    (this.root === null) && return false;
    let currentNode = this.root;
    let found = false;
    while(currentNode && !found) {
      (currentNode.val === val) && return true;

      if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        found = true;
      }
    }
    (!found) && return false;
    return currentNode;
  }
}
