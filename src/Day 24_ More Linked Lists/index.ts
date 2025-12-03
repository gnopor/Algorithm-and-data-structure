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
  next: Node | null = null;

  constructor(data: number) {
    this.data = data;
  }
}

class Solution {
  removeDuplicates(head: Node | null) {
    if (head == null) return;
    let pointer = head;
    while (pointer.next) {
      if (pointer.data == pointer.next.data) {
        pointer.next = pointer.next.next;
        continue;
      }

      pointer = pointer.next;
    }
  }

  insert(head: Node | null, data: number) {
    const p = new Node(data);
    if (head == null) {
      head = p;
    } else if (head.next == null) {
      head.next = p;
    } else {
      let start = head;
      while (start.next != null) {
        start = start.next;
      }
      start.next = p;
    }

    return head;
  }

  display(head: Node | null) {
    let start = head;
    while (start != null) {
      process.stdout.write(start.data + " ");
      start = start.next;
    }
  }
}

export default function main(readLine: () => string) {
  const T = parseInt(readLine(), 10);
  let head: Node | null = null;
  const myList = new Solution();

  for (let i = 0; i < T; i++) {
    head = myList.insert(head, parseInt(readLine()));
  }

  myList.removeDuplicates(head);
  myList.display(head);
}

// NOTE: Use CTL+D to signal the end of inputs in the CLI. Signaling the EOF(End Of File)
