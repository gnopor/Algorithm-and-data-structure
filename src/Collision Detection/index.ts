export function collision(
  x1: number,
  y1: number,
  r1: number,
  x2: number,
  y2: number,
  r2: number,
): boolean {
  const diff = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return diff < r1 + r2;
}

const params = [
  { x1: 1, y1: 1, r1: 1, x2: 1.1, y2: 1.1, r2: 0.1 },
  { x1: 1, y1: 1, r1: 0.01, x2: 1, y2: 1.1, r2: 0.01 },
  { x1: -5, y1: 5, r1: 5.0001, x2: 5, y2: -5, r2: 5 * Math.sqrt(5) },
];

for (let p of params) {
  console.log(
    `- input: ${JSON.stringify(p)} \n- ouput: ${collision(p.x1, p.x2, p.r1, p.y1, p.y2, p.r2)}\n`,
  );
}
