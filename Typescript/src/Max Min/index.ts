export default function maxMin(k: number, arr: number[]): number {
  arr.sort((a, b) => a - b);
  let result = Infinity;

  for (let i = 0; i < arr.length; i++) {
    const min = arr[i];
    const max = arr[i + k - 1];
    if (!max) break;

    const diff = max - min;
    if (diff >= result) continue;
    result = diff;
  }

  return result;
}

// Test
// const k = 2;
// const arr = [1, 4, 7, 2];
// const k = 3;
// const arr = [10, 100, 300, 200, 1000, 20, 30];
const k = 5;
const arr = [
  4504, 1520, 5857, 4094, 4157, 3902, 822, 6643, 2422, 7288, 8245, 9948, 2822,
  1784, 7802, 3142, 9739, 5629, 5413, 7232,
];
console.log(maxMin(k, arr));
