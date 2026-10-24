export function persistence(num: number): number {
  const intToArray = (int: number) =>
    String(int)
      .split("")
      .map((i) => +i);

  const process = (digits: number[], count = 0): number => {
    if (digits.length == 1) return count;

    const result = digits.reduce((prev, current) => prev * current, 1);
    return process(intToArray(result), count + 1);
  };

  return process(intToArray(num));
}

const params = [{ num: 39 }, { num: 999 }, { num: 4 }];

for (let p of params) {
  console.log(
    `- input: ${JSON.stringify(p)} \n- ouput: ${persistence(p.num)}\n`,
  );
}
