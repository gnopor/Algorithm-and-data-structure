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

  const names: string[] = [];

  for (let NItr: number = 0; NItr < N; NItr++) {
    const [firstName, emailID]: string[] = readLine()
      .replace(/\s+$/g, "")
      .split(" ");
    if (!/^[a-z.]+@gmail.com$/.test(emailID)) continue;
    names.push(firstName);
  }

  names.sort().forEach((name) => console.log(name));
}

// NOTE: Use CTL+D to signal the end of inputs in the CLI. Signaling the EOF(End Of File)
