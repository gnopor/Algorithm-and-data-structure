export function transposeTwoStrings(arr: string[]): string {
  const result: string[] = [];

  const length = Math.max(arr[0].length, arr[1].length);
  for (let i = 0; i < length; i++) {
    const a = arr[0][i] || " ";
    const b = arr[1][i] || " ";
    result.push(`${a} ${b}`);
  }

  return result.join("\n");
}

const params = [
  { arr: ["Hello", "World"] },
  { arr: ["a", "cat"] },
  { arr: ["gnopor", "tinto"] },
  { arr: ["takuma", ""] },
];

for (let p of params) {
  console.log(
    `- input: ${JSON.stringify(p)} \n- ouput: ${transposeTwoStrings(p.arr)}\n`,
  );
}
