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

class Printer<T> {
  printArray(arr: T[]) {
    arr.forEach((v) => console.log(v));
  }
}

export default function main(readLine: () => string) {
  const n = parseInt(readLine());
  const intArray: number[] = [];
  for (let i = 0; i < n; i++) {
    intArray.push(parseInt(readLine()));
  }

  const m = parseInt(readLine());
  const stringArray: string[] = [];
  for (let i = 0; i < m; i++) {
    stringArray.push(readLine());
  }

  const intPrinter = new Printer<number>();
  const stringPrinter = new Printer<string>();

  intPrinter.printArray(intArray);
  stringPrinter.printArray(stringArray);
}

// NOTE: Use CTL+D to signal the end of inputs in the CLI. Signaling the EOF(End Of File)
