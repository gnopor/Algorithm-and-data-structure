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
  const arr: number[][] = Array(6);

  for (let i: number = 0; i < 6; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  let max = -Infinity;
  for (let i = 2; i < arr.length; i++) {
    for (let j = 2; j < arr.length; j++) {
      const topLeft = arr[i - 2][j - 2];
      const topCenter = arr[i - 2][j - 1];
      const topRight = arr[i - 2][j];
      const center = arr[i - 1][j - 1];
      const bottomLeft = arr[i][j - 2];
      const bottomCenter = arr[i][j - 1];
      const bottomRight = arr[i][j];

      let currentCount =
        topLeft +
        topCenter +
        topRight +
        center +
        bottomLeft +
        bottomCenter +
        bottomRight;

      if (currentCount > max) {
        max = currentCount;
      }
    }
  }

  console.log(max);
}

// NOTE: Use CTL+D to signal the end of inputs in the CLI. Signaling the EOF(End Of File)
