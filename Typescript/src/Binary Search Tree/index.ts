// Course: https://courses.grainger.illinois.edu/cs225/sp2023/resources/bst/
// Since you have to visit less nodes when searching in an ideal BST, this case has a run time of O(lg(n))

class Node<T> {
  data: T;
  leftNode?: Node<T>;
  rightNode?: Node<T>;

  constructor(data: T) {
    this.data = data;
  }
}

class BST<T> {
  root?: Node<T>;

  insert(value: T): Node<T> {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this.root;
    }

    let currentNode = this.root;
    while (true) {
      if (currentNode.data > value) {
        if (!currentNode.leftNode) {
          currentNode.leftNode = newNode;
          break;
        } else {
          currentNode = currentNode.leftNode;
        }
      } else {
        if (!currentNode.rightNode) {
          currentNode.rightNode = newNode;
          break;
        } else {
          currentNode = currentNode.rightNode;
        }
      }
    }

    return newNode;
  }

  search(value: T): Node<T> | undefined {
    if (!this.root) return;

    let currentNode = this.root;
    while (true) {
      if (currentNode.data == value) {
        return currentNode;
      }
      if (currentNode.leftNode && currentNode.data > value) {
        currentNode = currentNode.leftNode;
      } else if (currentNode.rightNode && currentNode.data > value) {
        currentNode = currentNode.rightNode;
      }
    }
  }

  remove(value: T): Node<T> | undefined {
    if (!this.root) return;
    if (this.root.data == value) {
      this.root = undefined;
      return;
    }

    const nodeMap: Record<string, { node: Node<T>; parent?: Node<T> }> = {};
    const leafs: Node<T>[] = [];

    const fillNodeMap = (node: Node<T>, parent?: Node<T>) => {
      nodeMap[String(node.data)] = { node, parent };

      if (!node.leftNode && !node.rightNode) {
        leafs.push(node);
      }

      node.leftNode && fillNodeMap(node.leftNode, node);
      node.rightNode && fillNodeMap(node.rightNode, node);
    };
    const hasNoChildren = (node: Node<T>) => !node.leftNode && !node.rightNode;
    const hasOneChild = (node: Node<T>) =>
      (!!node.leftNode && !node.rightNode) ||
      (!node.leftNode && !!node.rightNode);
    const hasTwoChildren = (node: Node<T>) =>
      !!node.leftNode && !!node.rightNode;

    let parentNode: Node<T> = this.root;
    let currentNode =
      this.root.data < value ? this.root.rightNode : this.root.leftNode;
    while (true) {
      if (currentNode == undefined) return;

      // leaf node
      if (currentNode.data == value && hasNoChildren(currentNode)) {
        if (currentNode.data < parentNode.data) {
          parentNode.leftNode = undefined;
        } else {
          parentNode.rightNode = undefined;
        }

        break;
      }

      // one child node
      if (currentNode.data == value && hasOneChild(currentNode)) {
        if (currentNode.data < parentNode.data) {
          parentNode.leftNode = currentNode.leftNode || currentNode.rightNode;
        } else {
          parentNode.rightNode = currentNode.leftNode || currentNode.rightNode;
        }

        break;
      }

      // two children node (Replace it by its closest smaller value)
      if (currentNode.data == value && hasTwoChildren(currentNode)) {
        fillNodeMap(currentNode);
        const leaf = leafs.sort((a, b) => Number(a.data) - Number(b.data))[0];

        console.log({ currentNode, value, leaf });
        const oldParent = nodeMap[String(leaf.data)].parent;
        if (oldParent?.data && oldParent.data < currentNode.data) {
          oldParent.rightNode = undefined;
        }
        if (oldParent?.data && oldParent.data > currentNode.data) {
          oldParent.leftNode = undefined;
        }

        if (currentNode.data < parentNode.data) {
          parentNode.leftNode = leaf;
        } else {
          parentNode.rightNode = leaf;
        }
        leaf.rightNode = currentNode.rightNode;

        break;
      }

      parentNode = currentNode;
      currentNode =
        currentNode.data && currentNode.data < value
          ? currentNode.rightNode
          : currentNode.leftNode;
    }
  }

  inOrderTraversal(node: Node<T> | undefined) {
    if (!node) return;

    this.inOrderTraversal(node?.leftNode);
    console.log(node.data);
    this.inOrderTraversal(node?.rightNode);
  }

  preOrderTraversal(node: Node<T> | undefined) {
    if (!node) return;

    console.log(node.data);
    this.preOrderTraversal(node.leftNode);
    this.preOrderTraversal(node.rightNode);
  }

  postOrderTraversal(node: Node<T> | undefined) {
    if (!node) return;

    this.postOrderTraversal(node.leftNode);
    this.postOrderTraversal(node.rightNode);
    console.log(node.data);
  }

  getHeight(): number {
    if (!this.root) return 0;

    const nodeMap: Record<string, { node: Node<T>; parent?: Node<T> }> = {};
    const leafs: Node<T>[] = [];

    const fillNodeMap = (node: Node<T>, parent?: Node<T>) => {
      nodeMap[String(node.data)] = { node, parent };

      if (!node.leftNode && !node.rightNode) {
        leafs.push(node);
      }

      node.leftNode && fillNodeMap(node.leftNode, node);
      node.rightNode && fillNodeMap(node.rightNode, node);
    };

    const getBranchHeight = (node: Node<T>): number => {
      let count = 0;
      let currentNode = node;

      while (true) {
        const parent = nodeMap[String(currentNode.data)].parent;
        if (!parent) break;
        count += 1;
        currentNode = parent;
      }

      return count;
    };

    fillNodeMap(this.root);

    let maxHeight = 0;

    for (let leaf of leafs) {
      const height = getBranchHeight(leaf);
      if (height > maxHeight) {
        maxHeight = height;
      }
    }

    return maxHeight;
  }
}

export default function playground(values: number[]): number {
  const tree = new BST();

  // ======== insert
  values.forEach((v) => tree.insert(v));

  // ======== search
  // tree.inOrderTraversal(tree.root);

  // ======= remove
  tree.remove(7);
  tree.remove(5);

  return tree.getHeight();
}

// Test
const values = [3, 5, 2, 1, 4, 6, 7, 8];
console.log(playground(values));
