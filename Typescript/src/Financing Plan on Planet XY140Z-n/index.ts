// Math help from : https://www.quora.com/What-is-the-sum-of-all-numbers-between-two-given-numbers

export function finance(n: number): number {
  let total = 0;

  for (let i = 0; i <= n; i++) {
    const start = i + i;
    const end = i + n;

    total += (end * (end + 1)) / 2 - (start * (start - 1)) / 2;
  }

  return total;
}

// test
// const n = 7;
// const n = 6;
const n = 5000;

console.log(finance(n));
