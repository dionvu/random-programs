/**
 * @brief Inplementation of a linked list in Typescript.
 * @date 2024 Apr 1
 */

export class Node<T> {
  constructor() {
    this.next = null;
  }

  val: T;
  next: Node<T> | null;
};

class LinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  length: number;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  append(val: T) {
    if (this.head === null) {
      this.head = new Node<T>;
      this.head.val = val;
      this.tail = this.head;
    }
    else {
      let ptr = this.head;
      while (ptr.next) {
        ptr = ptr.next;
      }
      ptr.next = new Node<T>;
      ptr.next.val = val;
      this.tail = ptr.next;
    }

    this.length++;
  }

  prepend(val: T) {
    const ptr = this.head;
    this.head = new Node<T>;
    this.head.val = val;
    this.head.next = ptr;

    this.length++;
  }

  to_string(): string {
    let str = "";
    let ptr = this.head;
    while (ptr) {
      str += ptr.val + ' ';
      ptr = ptr.next;
    }

    return str;
  }

  at(index: number): T | null {
    let curr = 0;
    let ptr = this.head;

    while (ptr) {
      if (curr === index) return ptr.val;
      ptr = ptr.next;
      curr++;
    }

    return null;
  }

  pop() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }

    let ptr = this.head;
    while (ptr.next && ptr.next !== this.tail) {
      ptr = ptr.next;
    }

    ptr.next = null;
    this.tail = ptr;
    this.length--;

  }

  contains(val: T): boolean {
    let ptr = this.head;

    if (!this.head) {
      return false;
    }

    while (ptr) {
      if (ptr.val === val) return true;
      ptr = ptr.next;
    }
    return false;
  }

  insert_at(val: T, index: number) {
    if (index > this.length || index < 0) {
      return;
    }

    else {
      let ptr = this.head;
      let i = 0;

      while (ptr && i < index - 1) {
        ptr = ptr.next;
        i++;
      }

      if (!ptr) {
        return;
      }

      if (!ptr.next) {
        ptr.next = new Node<T>();
        ptr.next.val = val;
        this.tail = ptr.next;
      }

      else {
        const temp = ptr.next;
        ptr.next = new Node<T>();
        ptr.next.val = val;
        ptr.next.next = temp;
      }
    }
  }
};

const list = new LinkedList<number>;
list.append(10);
list.append(30);
list.prepend(1000);
list.append(20);
console.log(list.to_string());
console.log(`Length: ${list.length}`);
console.log(`${list.tail?.val}`);
console.log(list.at(2));
console.log();
