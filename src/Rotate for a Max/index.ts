export function maxRot(n: number): number {
  const rotations: number[] = [n];
  let current: string[] = String(n).split("");

  const rotate = (start_index: number, digits: string[]): string[] => {
    const staticPart: string[] = digits.slice(0, start_index);
    const dynamicPart: string[] = digits.slice(start_index);

    return [...staticPart, ...dynamicPart.slice(1), dynamicPart[0]];
  };

  for (let i = 0; i < current.length - 1; i++) {
    current = rotate(i, current);
    rotations.push(+current.join(""));
  }

  return Math.max(...rotations);
}

const params = [
  { n: 56789 },
  { n: 38458215 },
  { n: 507992495 },
  { n: 83286488 },
];

for (let p of params) {
  console.log(`- input: ${JSON.stringify(p)} \n- ouput: ${maxRot(p.n)}\n`);
}
