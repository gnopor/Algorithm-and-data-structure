export default function maximizingXor(l: number, r: number): number {
  const xor = (a: number, b: number) => a ^ b;

  let maxValue = 0;
  for (let i = l; i < r; i++) {
    for (let j = i + 1; j <= r; j++) {
      const xorValue = xor(i, j);
      if (xorValue <= maxValue) continue;

      maxValue = xorValue;
    }
  }

  return maxValue;
}

// test
const l = 10;
const r = 15;
console.log(maximizingXor(l, r));
