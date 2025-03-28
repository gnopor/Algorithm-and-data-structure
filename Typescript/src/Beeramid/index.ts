export default function beeramid(bonus: number, price: number): number {
  if (price > bonus) return 0;

  let level = 1;
  let maxCans = 1;
  while (true) {
    const tmpCansCount = maxCans + Math.pow(level + 1, 2);
    if (tmpCansCount * price > bonus) break;

    maxCans = tmpCansCount;
    level += 1;
  }

  return level;
}

// test

const bonus = 5000;
const price = 3;
console.log(beeramid(bonus, price));
