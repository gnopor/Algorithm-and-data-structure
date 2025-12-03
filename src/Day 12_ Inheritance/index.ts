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
  firstName: string;
  lastName: string;
  idNumber: number;

  constructor(firstName: string, lastName: string, identification: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = identification;
  }

  printPerson() {
    console.log(
      "Name: " +
        this.lastName +
        ", " +
        this.firstName +
        "\nID: " +
        this.idNumber
    );
  }
}

class Student extends Person {
  scores: number[];
  /*
   *   Class Constructor
   *
   *   @param firstName - A string denoting the Person's first name.
   *   @param lastName - A string denoting the Person's last name.
   *   @param id - An integer denoting the Person's ID number.
   *   @param scores - An array of integers denoting the Person's test scores.
   */
  constructor(
    firstName: string,
    lastName: string,
    identification: number,
    scores: number[]
  ) {
    super(firstName, lastName, identification);
    this.scores = scores;
  }

  /*
   *   Method Name: calculate
   *   @return A character denoting the grade.
   */
  calculate(): string {
    const average =
      this.scores.reduce((prev, current) => prev + current, 0) /
      this.scores.length;

    if (90 <= average && average <= 100) {
      return "O";
    }
    if (80 <= average && average < 90) {
      return "E";
    }
    if (70 <= average && average < 80) {
      return "A";
    }
    if (55 <= average && average < 70) {
      return "P";
    }
    if (40 <= average && average < 55) {
      return "D";
    }

    return "T";
  }
}

export default function main(readLine: () => string) {
  let [firstName, lastName, id] = readLine().split(" ");
  let numScores = +readLine();
  let testScores = readLine()
    .split(" ")
    .map((v) => +v);

  let s = new Student(firstName, lastName, +id, testScores);
  s.printPerson();
  s.calculate();
  console.log("Grade: " + s.calculate());
}

// NOTE: Use CTL+D to signal the end of inputs in the CLI. Signaling the EOF(End Of File)
