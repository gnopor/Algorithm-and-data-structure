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

class Difference {
  private elements: number[];
  maximumDifference: number = 0;

  constructor(elements: number[]) {
    this.elements = elements;
  }

  computeDifference() {
    let max = -Infinity;
    for (let i = 0; i < this.elements.length; i++) {
      for (let j = i + 1; j < this.elements.length; j++) {
        const value = Math.abs(this.elements[i] - this.elements[j]);
        if (value > max) {
          max = value;
        }
      }
    }

    this.maximumDifference = max;
  }
}

export default function main(readLine: () => string) {
  let count = +readLine();
  let elements = readLine()
    .split(" ")
    .map((v) => +v);

  let difference = new Difference(elements);
  difference.computeDifference();
  console.log(difference.maximumDifference);
}

// NOTE: Use CTL+D to signal the end of inputs in the CLI. Signaling the EOF(End Of File)
