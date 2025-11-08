export function sumDigits(n: number): number {
  return String(Math.abs(n))
    .split("")
    .reduce((prev: number, current: string) => prev + +current, 0);
}

// Test
const n = -99;
console.log(sumDigits(n));
