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

/*
 * Complete the 'bitwiseAnd' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER N
 *  2. INTEGER K
 */

function bitwiseAnd(N: number, K: number): number {
  let max = -Infinity;
  for (let i = 1; i <= N; i++) {
    for (let j = i + 1; j <= N; j++) {
      const result = i & j;
      if (result < K && result > max) {
        max = result;
      }
    }
  }

  return max;
}

export default function main(readLine: () => string) {
  const t: number = parseInt(readLine().trim(), 10);

  for (let tItr: number = 0; tItr < t; tItr++) {
    const firstMultipleInput: string[] = readLine()
      .replace(/\s+$/g, "")
      .split(" ");

    const count: number = parseInt(firstMultipleInput[0], 10);

    const lim: number = parseInt(firstMultipleInput[1], 10);

    const res: number = bitwiseAnd(count, lim);
    console.log(res);
  }
}

// NOTE: Use CTL+D to signal the end of inputs in the CLI. Signaling the EOF(End Of File)
