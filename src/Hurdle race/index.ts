function hurdleRace(k: number, height: number[]): number {
  const maxHeight = Math.max(...height);
  return maxHeight > k ? maxHeight - k : 0;
}

// test

const k = 7;
const height = [2, 5, 4, 5, 2];
console.log(hurdleRace(k, height));
