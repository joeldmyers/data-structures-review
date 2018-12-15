/** Implementation of stack using singly linked list
/* Last in, first out
/* Big O -
/* Insertion - O(1)
/* Removal - O(1)
/* Searching - O(N)
/* Access - O(N)
/* search and access we probably won't use with this.
**/



class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = newNode;
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
      this.size++;
      return this.size;
    }
  }

  pop() {
    if (this.size === 0) {
      return null;
    } else {

      const temp = this.first;
      this.first.next = null;

      if (this.size === 1) {
        this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.val;
    }
  }
}
