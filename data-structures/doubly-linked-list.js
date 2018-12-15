/** Big O -
/* Insertion - O(1)
/* Removal - O(1)
/* Searching - O(N)
/* Access - O(N)
/* better than singly linked list, but takes more memory
**/

class Node(val) {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop(val) {
    if (this.length === 0) {
      return undefined;
    }

    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return this;
  }

  shift() {
    // removes first element from array

    if (this.length === 0) {
      return undefined;
    }

    var oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    this.head = this.head.next;
    this.head.prev = null;
    oldHead.next = null;
    this.length--;
    return this;

  }

  unshift(val) {
    // adds value to start
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }


    if (index <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      let count = this.length;
      let current = this.tail;

      while (count !== index) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    (index < 0 || index > this.length) && return false;
    (index === 0) && return this.unshift(val);
    (index === this.length) && return this.push(val);

    const newNode = new Node(val);
    const nodeBefore = this.get(index - 1);
    const nodeAfter = nodeBefore.next;
    newNode.prev = nodeBefore;
    newNode.next = nodeAfter;
    nodeAfter.prev = newNode;
    nodeBefore.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    (index < 0 || index >= length) && return false;
    (index === 0) && return this.shift();
    (index === this.length - 1) && return this.pop();
    const nodeToRemove = this.get(index);
    nodeToRemove.prev.next = nodeToRemove.next;
    nodeToRemove.next.prev = nodeToRemove.prev;
    nodeToRemove.prev = null;
    nodeToRemove.next = null;
    this.length--;
    return this;
  }
}
