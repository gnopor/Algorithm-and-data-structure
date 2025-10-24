("use strict");

// SETUP INPUTS =========================
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

// MAIN SOLUTION =========================
export default function main(readLine: () => string) {
  const i = 4;
  const d = 4.0;
  const s = "HackerRank ";

  // Declare second integer, double, and String variables.
  let var_integer: number;
  let var_double: number;
  let var_string: string;

  // Read and save an integer, double, and String to your variables.
  var_integer = Number(readLine());
  var_double = Number(readLine());
  var_string = readLine();

  // Print the sum of both integer variables on a new line.
  console.log(i + var_integer);

  // Print the sum of the double variables on a new line.
  console.log(Number(d + var_double).toFixed(1));

  // Concatenate and print the String variables on a new line
  // The 's' variable above should be printed first.
  console.log(`${s}${var_string}`);
}

// NOTE: Use CTL+D to signal the end of inputs in the CLI. Signaling the EOF(End Of File)
