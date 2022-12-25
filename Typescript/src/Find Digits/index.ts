export default function findDigits(n: number): number {
  let divisorCount = 0;

  for (let num of String(n)) {
    if (n % +num !== 0) continue;

    divisorCount++;
  }

  return divisorCount;
}

// // Test
// const n = 124;
// console.log(findDigits(n));
