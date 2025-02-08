("use strict");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";
  main(readLine);
});

function readLine(): string {
  return inputLines[currentLine++];
}

class Node {
  data: number;
  left: Node | null;
  right: Node | null;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  insert(root: Node | null, data: number) {
    if (root === null) {
      root = new Node(data);

      return root;
    }

    if (data <= root.data) {
      if (root.left) {
        this.insert(root.left, data);
      } else {
        root.left = new Node(data);
      }
    } else {
      if (root.right) {
        this.insert(root.right, data);
      } else {
        root.right = new Node(data);
      }
    }

    return root;
  }

  getHeight(root: Node | null) {
    if (!root) return 0;

    const leaves: { node: Node; depth: number }[] = [];

    const getLeaves = (node: Node, depth: number) => {
      if (!node.left && !node.right) {
        leaves.push({ node, depth });
        return;
      }

      if (node.left) getLeaves(node.left, depth + 1);
      if (node.right) getLeaves(node.right, depth + 1);
      return;
    };

    getLeaves(root, 0);

    return Math.max(...leaves.map((v) => v.depth));
  }
}

export default function main(readLine: () => string) {
  const tree = new BinarySearchTree();
  let root: Node | null = null;

  const nodeCount = parseInt(readLine());
  for (let i = 0; i < nodeCount; i++) {
    root = tree.insert(root, parseInt(readLine()));
  }

  console.log(tree.getHeight(root));
}

// NOTE: Use CTL+D to signal the end of inputs in the CLI. Signaling the EOF(End Of File)
