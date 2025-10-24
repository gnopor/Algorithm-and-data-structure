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
  const N: number = parseInt(readLine().trim(), 10);

  if (N % 2 != 0) {
    console.log("Weird");
  } else if (N >= 2 && N <= 5) {
    console.log("Not Weird");
  } else if (N >= 6 && N <= 20) console.log("Weird");
  else {
    console.log("Not Weird");
  }
}

// NOTE: Use CTL+D to signal the end of inputs in the CLI. Signaling the EOF(End Of File)
