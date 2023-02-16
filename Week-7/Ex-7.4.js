// Parenthesis Checker

class Stack {
  constructor() {
    this.st = [];
  }
  push(v) {
    this.st.push(v);
  }
  pop() {
    return this.st.pop();
  }
  length() {
    return this.st.length;
  }
  top() {
    return this.st[this.st.length - 1];
  }
  printStack() {
    console.log(this.st);
  }
  search(elementToFind) {
    return this.st.includes(elementToFind);
  }
  get(index) {
    return this.st[index];
  }
}

// Exercise 7.4

function parenthesisChecker(string) {
  let stack = new Stack();
  for (let i = 0; i < string.length; i++) {
    let a = string[i];
    if (a === "{" || a === "[" || a === "(") {
      stack.push(a);
      continue;
    }
    if (stack.length() === 0) {
      return false;
    }
    let poppedElement;
    switch (a) {
      case "}":
        poppedElement = stack.pop();
        if (poppedElement === "[" || poppedElement === "(") {
          return false;
        }
        break;
      case "]":
        poppedElement = stack.pop();
        if (poppedElement === "{" || poppedElement === "(") {
          return false;
        }
        break;
      case ")":
        poppedElement = stack.pop();
        if (poppedElement === "[" || poppedElement === "{") {
          return false;
        }
        break;
    }
  }
  return stack.length() === 0;
}

console.log(parenthesisChecker("){[()]}")); // false
console.log(parenthesisChecker("{[()]}")); // true
console.log(parenthesisChecker("{[(]})")); // false
