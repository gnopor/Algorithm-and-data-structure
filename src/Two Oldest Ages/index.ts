export function twoOldestAges(ages: number[]): number[] {
  return ages.sort((a, b) => a - b).slice(-2);
}
const params = [
  { ages: [1, 2, 10, 8] },
  { ages: [1, 5, 87, 45, 8, 8] },
  { ages: [1, 3, 10, 0] },
];

for (let p of params) {
  console.log(
    `- input: ${JSON.stringify(p)} \n- ouput: ${twoOldestAges(p.ages)}\n`,
  );
}
