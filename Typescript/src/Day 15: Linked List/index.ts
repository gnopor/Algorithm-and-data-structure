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

class LLNode {
  data: number;
  next: LLNode | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}
class Solution {
  insert(head: LLNode | null, data: number): LLNode {
    const node = new LLNode(data);
    if (!head) return node;

    let start = head;
    while (start.next) {
      start = start.next;
    }
    start.next = node;

    return head;
  }

  display(head: LLNode | null) {
    let start = head;
    while (start) {
      process.stdout.write(start.data + " ");
      start = start.next;
    }
  }
}

export default function main(readLine: () => string) {
  const T = parseInt(readLine());
  let head: LLNode | null = null;

  const mylist = new Solution();
  for (let i = 0; i < T; i++) {
    const data = parseInt(readLine());
    head = mylist.insert(head, data);
  }
  mylist.display(head);
}

// NOTE: Use CTL+D to signal the end of inputs in the CLI. Signaling the EOF(End Of File)
