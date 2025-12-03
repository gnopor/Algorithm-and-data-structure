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

interface AdvancedArithmetic {
  divisorSum: (n: number) => number;
}

class Calculator implements AdvancedArithmetic {
  divisorSum(n: number): number {
    let result = 0;

    for (let i = 1; i <= n; i++) {
      if (n % i != 0) continue;
      result += i;
    }

    return result;
  }
}

export default function main(readLine: () => string) {
  const n = parseInt(readLine());

  const myCalculator: AdvancedArithmetic = new Calculator();
  const sum = myCalculator.divisorSum(n);
  console.log(`I implemented: AdvancedArithmetic\n${sum}`);
}

// NOTE: Use CTL+D to signal the end of inputs in the CLI. Signaling the EOF(End Of File)
