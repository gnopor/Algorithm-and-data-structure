export default function absolutePermutation(n: number, k: number): number[] {
  const permutations = new Array(n).fill(0);
  const countSort = new Array(n).fill(0);

  if (k == 0) return permutations.map((_v, i) => i + 1);

  for (let i = 1; i <= n; i++) {
    const leftP = i - k;
    let rightP = (i + k) % n;
    rightP = rightP == 0 ? n : rightP;

    const p = leftP > 0 && countSort[leftP] == 0 ? leftP : rightP;

    if (Math.abs(p - i) != k) return [-1];

    countSort[p] = 1;
    permutations[i - 1] = p;
  }

  return permutations;
}

// Test
// const n = 4;
// const k = 2;
// const n = 10;
// const k = 1;
const n = 10;
const k = 0;
console.log(absolutePermutation(n, k));

// const entries = [
//   [10, 0],
//   [10, 1],
//   [7, 0],
//   [10, 9],
//   [9, 0],
//   [10, 3],
//   [8, 2],
//   [8, 0],
//   [7, 0],
//   [10, 1],
// ];

// for (const [n, k] of entries) {
//   const result = absolutePermutation(n, k);

//   console.log({ n, k, result: result.join(" ") });
// }
