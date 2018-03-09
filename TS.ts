class Node1 {
  left: Node1 | null = null;
  right: Node1 | null = null;
  constructor(public value: number) {}
}

class Tree {
  root: Node1 = null;
  insert(value: number) {
    let node = new Node1(value);
    let current = this.root;
    if (!this.root) {
      this.root = new Node1(value);
      return true;
    }
    while (current !== null) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          break;
        } else {
          current = current.left;
        }
      } else {
        if (current.right === null) {
          current.right = node;
          break;
        } else {
          current = current.right;
        }
      }
    }
    return true;
  }

  search(value: number) {
    let current = this.root;
    while (current !== null) {
      console.log(current.value);
      if (value === current.value) {
        console.log("get!");
        return true;
      }
      current = value > current.value ? current.right : current.left;
    }
    console.log("cannot find!");
    return false;
  }

  preOrderTraverse(node: Node1) {
    if (node) {
      console.log(node.value);
      this.preOrderTraverse(node.left);
      this.preOrderTraverse(node.right);
    }
  }
}

// test code
let tree = new Tree();
let dataList = [7, 8, 10, 9, 3, 12, 11, 4, 5, 1, 3];
console.log(Array.isArray(dataList));
dataList.forEach(function(data) {
  tree.insert(data);
});
tree.preOrderTraverse(tree.root);
