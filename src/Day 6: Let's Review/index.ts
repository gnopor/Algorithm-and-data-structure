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
  const T: number = +readLine();
  for (let i = 0; i < T; i++) {
    const str = readLine();
    const left: string[] = [];
    const right: string[] = [];
    for (let j = 0; j < str.length; j++) {
      (j % 2 == 0 ? left : right).push(str[j]);
    }

    console.log(`${left.join("")} ${right.join("")}`);
  }
}

// NOTE: Use CTL+D to signal the end of inputs in the CLI. Signaling the EOF(End Of File)
