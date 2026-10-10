export function freqSeq(str: string, sep: string): string {
  const countSort: Record<string, number> = {};

  const result: string[] = [];
  for (let char of str) {
    if (!countSort[char]) {
      countSort[char] = 0;
    }
    countSort[char] += 1;
  }

  for (let i = 0; i < str.length; i++) {
    result[i] = countSort[str[i]].toString();
  }

  return result.join(sep);
}

const params = [
  { str: "hello world", sep: "-" },
  { str: "19999999", sep: ":" },
  { str: "^^^**$", sep: "x" },
];

for (let p of params) {
  console.log(
    `- input: ${JSON.stringify(p)} \n- ouput: ${freqSeq(p.str, p.sep)}\n`,
  );
}
