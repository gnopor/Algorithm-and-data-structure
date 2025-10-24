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

export default function main(readLine: () => string) {
  const n: number = parseInt(readLine().trim(), 10);

  const bites = Number(n).toString(2).split("");
  let max = 0;
  let currentCount = 0;
  for (let digit of bites) {
    if (digit == "0") {
      currentCount = 0;
      continue;
    }

    currentCount += 1;
    if (currentCount > max) {
      max = currentCount;
    }
  }

  console.log(max);
}

// NOTE: Use CTL+D to signal the end of inputs in the CLI. Signaling the EOF(End Of File)
