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

class Calculator {
  power(n: number, p: number): number {
    if (n < 0 || p < 0) {
      throw new Error("n and p should be non-negative");
    }

    return Math.pow(n, p);
  }
}

export default function main(readLine: () => string) {
  const myCalculator = new Calculator();
  let T = parseInt(readLine());
  while (T-- > 0) {
    const [n, p] = readLine().split(" ");
    try {
      const ans = myCalculator.power(+n, +p);
      console.log(ans);
    } catch (e) {
      console.log(e.message);
    }
  }
}

// NOTE: Use CTL+D to signal the end of inputs in the CLI. Signaling the EOF(End Of File)
