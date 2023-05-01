export default function serviceLane(
  n: number,
  width: number[],
  cases: number[][]
): number[] {
  const vehicleWidths: number[] = [];

  for (let caseItem of cases) {
    vehicleWidths.push(Math.min(...width.slice(caseItem[0], caseItem[1] + 1)));
  }

  return vehicleWidths;
}

// Test
const n = 0;
const width = [2, 3, 1, 2, 3, 2, 3, 3];
const cases = [
  [0, 3],
  [4, 6],
  [6, 7],
  [3, 5],
  [0, 7],
];

console.log(serviceLane(n, width, cases));
