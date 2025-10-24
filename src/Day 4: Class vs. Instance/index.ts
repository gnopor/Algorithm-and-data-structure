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

class Person {
  age: number;

  constructor(initialAge: number) {
    this.age = initialAge > 0 ? initialAge : 0;
    if (initialAge < 0) {
      console.log("Age is not valid, setting age to 0.");
    }
  }

  yearPasses() {
    this.age += 1;
  }

  amIOld() {
    const message =
      this.age < 13
        ? "You are young."
        : this.age < 18
        ? "You are a teenager."
        : "You are old.";
    console.log(message);
  }
}

export default function main(readLine: () => string) {
  const T: number = +readLine();
  for (let i = 0; i < T; i++) {
    const p = new Person(+readLine());
    p.amIOld();
    for (let j = 0; j < 3; j++) {
      p.yearPasses();
    }
    p.amIOld();
    console.log("");
  }
}

// NOTE: Use CTL+D to signal the end of inputs in the CLI. Signaling the EOF(End Of File)
