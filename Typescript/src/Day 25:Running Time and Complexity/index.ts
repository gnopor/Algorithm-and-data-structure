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

// HELP FROM - https://stackoverflow.com/questions/53569304/how-to-check-if-a-10-digit-number-is-prime-or-not
function processData(num: number) {
  if (num < 2) return "Not prime";
  if (num > 2 && num % 2 == 0) return "Not prime";

  // We go from 2 to sqrt(num) because sqrt(num) is the biggest divisor of num.
  const sqrt = +Math.sqrt(num).toFixed(0);
  let divisorCount = 0;

  for (let i = 2; i <= sqrt; i++) {
    if (num % i == 0) {
      divisorCount += 1;
    }
  }

  return divisorCount > 0 ? "Not prime" : "Prime";
}

export default function main(readLine: () => string) {
  const T = parseInt(readLine());
  for (let i = 0; i < T; i++) {
    const num = +readLine();
    console.log(processData(num));
  }
}

// NOTE: Use CTL+D to signal the end of inputs in the CLI. Signaling the EOF(End Of File)
