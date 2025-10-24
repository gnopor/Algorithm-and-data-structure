export default function divisibleSumPairs(
  n: number,
  k: number,
  ar: number[]
): number {
  let num_pairs = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const result = (ar[i] + ar[j]) % k;
      result === 0 && num_pairs++;
    }
  }

  return num_pairs;
}

// test
// console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
