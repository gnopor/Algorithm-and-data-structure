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
  const n = parseInt(readLine());
  const a: number[] = readLine()
    .trim()
    .split(" ")
    .map((v) => parseInt(v));

  let totalSwapCount = 0;
  for (let i = 0; i < n; i++) {
    let swapCount = 0;

    for (let j = 0; j < n - 1; j++) {
      if (a[j] > a[j + 1]) {
        const lowerValue = a[j + 1];
        a[j + 1] = a[j];
        a[j] = lowerValue;

        swapCount += 1;
      }
    }

    if (swapCount == 0) {
      break;
    }

    totalSwapCount += swapCount;
  }

  console.log(`Array is sorted in ${totalSwapCount} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[n - 1]}`);
}

// NOTE: Use CTL+D to signal the end of inputs in the CLI. Signaling the EOF(End Of File)
