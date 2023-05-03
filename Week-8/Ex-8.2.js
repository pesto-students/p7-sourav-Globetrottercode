// Check if Binary Tree is a Binary Search Tree
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  } // Detect Binary Search Tree
  findMin(node = this.root) {
    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }
  findMax(node = this.root) {
    while (node.right !== null) {
      node = node.right;
    }
    return node.data;
  }

  isBST(node = this.root) {
    if (node === null) {
      return 1;
    }
    if (node.left && this.findMax(node.left) > node.data) {
      return 0;
    }
    if (node.right && this.findMin(node.right) < node.data) {
      return 0;
    }
    if (!this.isBST(node.left) || !this.isBST(node.right)) {
      return 0;
    }
    return 1;
  }
}

const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);
bst.add(10);

console.log(bst.isBST()); // 1
