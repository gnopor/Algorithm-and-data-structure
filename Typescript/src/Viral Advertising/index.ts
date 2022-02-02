export default function viralAdvertising(n: number): number {
  let cumulative = 2;
  let shareds = 2;

  for (let i = 2; i <= n; i++) {
    shareds = Math.floor((shareds * 3) / 2);
    cumulative += shareds;
  }

  return cumulative;
}

// Test
const n = 3;
console.log(viralAdvertising(n));
