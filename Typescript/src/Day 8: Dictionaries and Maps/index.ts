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
  const n: number = parseInt(readLine().trim(), 10);

  const phoneBook = new Map();

  for (let i = 0; i < n; i++) {
    const [name, phone] = readLine().split(" ");
    phoneBook.set(name, parseInt(phone));
  }

  let name = readLine();
  while (typeof name == "string") {
    console.log(
      phoneBook.has(name) ? `${name}=${phoneBook.get(name)}` : "Not found"
    );

    name = readLine();
  }
}

// NOTE: Use CTL+D to signal the end of inputs in the CLI. Signaling the EOF(End Of File)
