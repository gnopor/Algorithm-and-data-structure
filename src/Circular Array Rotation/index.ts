export default function circularArrayRotation(
  a: number[],
  k: number,
  queries: number[]
): number[] {
  const rotationsTime = a.length - (k % a.length);

  const part1 = a.slice(rotationsTime);
  const part2 = a.slice(0, rotationsTime);

  const newArray = part1.concat(part2);

  const result = [];
  for (let q of queries) {
    result.push(newArray[q]);
  }

  return result;
}

// // Test
// const a = [3, 4, 5];
// const k = 2;
// const queries = [1, 2];

// console.log(circularArrayRotation(a, k, queries));
