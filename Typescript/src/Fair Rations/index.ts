export default function fairRations(B: number[]): string {
  let loaves = 0;

  for (let i = 0; i < B.length; i++) {
    if (B[i] % 2 == 0) continue;

    B[i] += 1;

    if (B[i + 1] != undefined) {
      B[i + 1] += 1;
      loaves += 2;
      continue;
    }

    if (B[i - 1] != undefined) {
      B[i - 1] += 1;
      loaves += 2;
      continue;
    }
  }

  return B.findIndex((p) => p % 2 != 0) != -1 ? "NO" : String(loaves);
}

// Test

const B = [4, 5, 6, 7];

console.log(fairRations(B));
