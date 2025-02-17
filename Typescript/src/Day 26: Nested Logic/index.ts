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
  const [day1, month1, year1] = readLine()
    .split(" ")
    .map((v) => +v);
  const [day2, month2, year2] = readLine()
    .split(" ")
    .map((v) => +v);

  if (year1 > year2) {
    console.log(10000);
    return;
  }

  if (year1 == year2 && month1 > month2) {
    console.log(500 * (month1 - month2));
    return;
  }

  if (year1 == year2 && month1 == month2 && day1 >= day2) {
    console.log(15 * (day1 - day2));
    return;
  }

  console.log(0);
}

// NOTE: Use CTL+D to signal the end of inputs in the CLI. Signaling the EOF(End Of File)
