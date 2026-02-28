export function getMiddle(s: string) {
  const length = s.length;
  const isEven = s.length % 2 == 0;
  const start = Math.floor(length / 2) - (isEven ? 1 : 0);
  const end = start + (isEven ? 2 : 1);

  return s.slice(start, end);
}

const params = [{ s: "test" }, { s: "testing" }, { s: "middle" }, { s: "A" }];

for (let p of params) {
  console.log(`- input: ${JSON.stringify(p)} \n- ouput: ${getMiddle(p.s)}\n`);
}
