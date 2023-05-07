export default function chocolateFeast(
  n: number,
  c: number,
  m: number
): number {
  const initialBars = n / c;
  let bars = initialBars;
  let wrappers = initialBars;

  while (wrappers >= m) {
    const newBars = Math.trunc(wrappers / m);
    bars += newBars;

    wrappers = wrappers + newBars - newBars * m;
  }

  return bars;
}

// Test
const n = 6;
const c = 2;
const m = 2;

console.log(chocolateFeast(n, c, m));
