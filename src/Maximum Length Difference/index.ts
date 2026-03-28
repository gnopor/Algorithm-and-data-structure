export function maxLengthDifference(a1: string[], a2: string[]): number {
  if (a1.length == 0 || a2.length == 0) return -1;
  let result = 0;

  for (let item1 of a1) {
    for (let item2 of a2) {
      const diff = Math.abs(item1.length - item2.length);
      if (diff < result) continue;
      result = diff;
    }
  }

  return result;
}

const params = [
  {
    a1: [
      "hoqq",
      "bbllkw",
      "oox",
      "ejjuyyy",
      "plmiis",
      "xxxzgpsssa",
      "xxwwkktt",
      "znnnnfqknaz",
      "qqquuhii",
      "dvvvwz",
    ],
    a2: ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"],
  },
];

for (let p of params) {
  console.log(
    `- input: ${JSON.stringify(p)} \n- ouput: ${maxLengthDifference(p.a1, p.a2)}\n`,
  );
}
