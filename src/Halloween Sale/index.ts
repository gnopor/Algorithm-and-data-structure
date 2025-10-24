export default function howManyGames(
  p: number,
  d: number,
  m: number,
  s: number
): number {
  let nextPrice = p;
  let sales = 0;
  let count = 0;

  while (nextPrice + sales <= s) {
    sales += nextPrice;
    count += 1;

    const newPrice = nextPrice - d;
    nextPrice = newPrice >= m ? newPrice : m;
  }

  return count;
}

// Test
const p = 20;
const d = 3;
const m = 6;
const s = 85;

console.log(howManyGames(p, d, m, s));
