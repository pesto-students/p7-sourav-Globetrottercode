// Queue with 2 Stacks

class Queue {
  constructor() {
    this.st1 = [];
    this.st2 = [];
  }
  enqueue(el) {
    while (this.st1.length > 0) {
      this.st2.push(this.st1.pop());
    }
    this.st1.push(el);

    while (this.st2.length > 0) {
      this.st1.push(this.st2.pop());
    }
  }
  dequeue() {
    if (this.st1.length === 0) {
      return "Queue Empty";
    }
    return this.st1.pop();
  }
}

let q = new Queue();
console.log(q.dequeue());
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q);
