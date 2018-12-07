class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop(val) {
    (!this.head) && return undefined;
    var current = this.head;
    var NewTail = current;

    while (current.next) {
        newTail = current;
        current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift(val) {
    (!this.head) && return undefined;

    const newHead = this.head.next;
    this.head = newHead;
    this.length--;

    return this;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
    }

    this.length++;
    return this;
  }
}