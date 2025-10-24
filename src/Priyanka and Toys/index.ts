export default function toys(w: number[]): number {
  w.sort((a, b) => a - b);
  let countainerCount = 1;
  let indexStart = 0;
  let valueStart = w[0] + 4;

  for (let i = 1; i < w.length; i++) {
    if (w[i] <= valueStart) continue;

    countainerCount += 1;
    indexStart = i;
    valueStart = w[i] + 4;
  }

  return countainerCount;
}

// test
const w = [1, 2, 3, 21, 7, 12, 14, 21];
console.log(toys(w));
