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

class Solution {
  private stack: string[] = [];
  private queue: string[] = [];

  pushCharacter(ch: string) {
    this.stack.push(ch);
  }
  enqueueCharacter(ch: string) {
    this.queue.unshift(ch);
  }

  popCharacter(): string {
    return this.stack.pop() || "";
  }
  dequeueCharacter(): string {
    return this.queue.pop() || "";
  }
}

export default function main(readLine: () => string) {
  // read the string s
  const s = readLine();
  const len = s.length;
  // create the Solution class object p
  const obj = new Solution();
  //push/enqueue all the characters of string s to stack
  for (let i = 0; i < len; i++) {
    obj.pushCharacter(s.charAt(i));
    obj.enqueueCharacter(s.charAt(i));
  }

  let isPalindrome = true;
  /*
    pop the top character from stack
    dequeue the first character from queue
    compare both the characters*/

  for (let i = 0; i < len / 2; i++) {
    if (obj.popCharacter() != obj.dequeueCharacter()) {
      isPalindrome = false;
      break;
    }
  }
  //finally print whether string s is palindrome or not

  if (isPalindrome) console.log("The word, " + s + ", is a palindrome.");
  else console.log("The word, " + s + ", is not a palindrome.");
}

// NOTE: Use CTL+D to signal the end of inputs in the CLI. Signaling the EOF(End Of File)
