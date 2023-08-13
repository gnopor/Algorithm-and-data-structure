export default function quicksort(arr: number[]): number[] {
  const p = arr[0];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < p) {
      left.push(arr[i]);
      continue;
    }
    if (arr[i] > p) {
      right.push(arr[i]);
      continue;
    }
  }

  return left.concat([p]).concat(right);
}

// Test

const arr = [4, 5, 3, 7, 2];

console.log(quicksort(arr));
