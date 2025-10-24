export default function beautifulBinaryString(b: string): number {
  const splittedString = b.split("");
  let minimumMovesRequired = 0;

  for (let i = 0; i < splittedString.length - 2; i++) {
    if (splittedString[i] != "0") continue;
    if (splittedString[i + 1] != "1") continue;
    if (splittedString[i + 2] != "0") continue;

    splittedString[i + 2] = "1";
    minimumMovesRequired += 1;
  }

  return minimumMovesRequired;
}

// test
const b = "0100101010";
console.log(beautifulBinaryString(b));
