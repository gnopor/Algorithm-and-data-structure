export default function jumpingOnClouds(c: number[]): number {
  let count = 0;

  let i = 0;
  while (i < c.length) {
    i = c[i + 2] === 0 ? i + 2 : i + 1;
    if (i >= c.length) break;

    count += 1;
  }

  return count;
}

// Test
const c = [0, 0, 0, 0, 1, 0];
console.log(jumpingOnClouds(c));
