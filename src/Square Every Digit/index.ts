export function squareDigits(num: number): number {
  const concatenate = String(num)
    .split("")
    .reduce((prev: string, current) => `${prev}${+current * +current}`, "");

  return +concatenate;
}

const params = [{ num: 9119 }, { num: 0 }];

for (let p of params) {
  console.log(
    `- input: ${JSON.stringify(p)} \n- ouput: ${squareDigits(p.num)}\n`,
  );
}
