export function spinningRings(innerMax: number, outerMax: number): number {
  let countMoves = 0;

  const mod = (n: number, m: number) => (m + (n % m)) % m;
  while (true) {
    countMoves += 1;
    const innerValue = mod(-countMoves, innerMax + 1);
    const outerValue = mod(countMoves, outerMax + 1);

    if (innerValue == outerValue) break;
  }

  return countMoves;
}

//  test
const innerMax = 2;
const outerMax = 3;
console.log(spinningRings(innerMax, outerMax));
