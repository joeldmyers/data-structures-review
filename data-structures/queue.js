/** Implementation of queue with singly linked list
/* good for queue, since we add to end (O(1)) and remove from beginning (O(1))
/* First in, first out
/* Big O -
/* Insertion - O(1)
/* Removal - O(1)
/* Searching - O(N)
/* Access - O(N)
/* use cases - background tasks, uploading resources, print queue, etc.
/* note - good to not use array for this if performance is an issue,
/* because we need to either shift or unshift, which is O(N)
/* search and access we probably won't use with this.
**/


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.size++;
    }
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    const temp = this.first;
    this.first.next = null;
    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}
