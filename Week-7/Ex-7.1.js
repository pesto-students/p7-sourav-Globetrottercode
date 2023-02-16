//Reversing Linked List

// SinglyLinkedList

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(element) {
    let node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    this.length++;
  }

  remove(element) {
    let currentNode = this.head;
    var previousNode;
    if (currentNode.data === element) {
      head = currentNode.next;
    } else {
      while (currentNode.data != element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    this.length--;
  }

  isEmpty() {
    return this.length === 0;
  }

  indexOf(element) {
    let currentNode = this.head;
    let i = -1;
    while (currentNode) {
      i++;
      if (currentNode.data === element) {
        return i;
      } else {
        currentNode = currentNode.next;
      }
    }
    return -1;
  }

  elementAt(index) {
    let currentNode = this.head;
    let count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.data;
  }
  addAt(index, element) {
    let node = new Node(element);
    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;

    if (index > this.length && index < 0) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode;
      this.head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    this.length++;
  }
  removeAt(index) {
    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;

    if (index < 0 && index >= length) {
      return null;
    }
    if (index === 0) {
      this.head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    this.length--;
    return currentNode.data;
  }
  print() {
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode) {
      console.log(currentIndex, currentNode.data);
      currentNode = currentNode.next;
      currentIndex++;
    }
  }
}

//Exercise 7.1

let linkedList1 = new LinkedList();
linkedList1.add(10);
linkedList1.add(20);
linkedList1.add(30);
linkedList1.add(40);
linkedList1.add(50);
linkedList1.add(60);

function reverseLinkedList(linked_List) {
  let currentNode = linked_List.head;
  let previousNode = null;
  let next = null;

  while (currentNode) {
    next = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = next;
  }
  linked_List.head = previousNode;
  linked_List.print();
}
console.log("Before Reversing linkedList 1");

linkedList1.print(); // 10 -> 20 -> 30 -> 40 -> 50 -> 60

console.log("After Reversing linkedList 1");

reverseLinkedList(linkedList1); // 60 -> 50 -> 40 -> 30 -> 20 -> 10
