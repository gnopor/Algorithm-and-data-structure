export function findMissingLetter(array: string[]): string {
  let missingCode = 0;

  for (let i = 1; i < array.length; i++) {
    const codeA = array[i - 1].charCodeAt(0);
    const codeB = array[i].charCodeAt(0);
    if (codeB == codeA + 1) continue;

    missingCode = codeA + 1;
  }

  return String.fromCharCode(missingCode);
}

const params = [
  { array: ["a", "b", "c", "d", "f"] },
  { array: ["O", "Q", "R", "S"] },
];

for (let p of params) {
  console.log(
    `- input: ${JSON.stringify(p)} \n- ouput: ${findMissingLetter(p.array)}\n`,
  );
}
