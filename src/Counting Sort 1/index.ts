export default function countingSort(arr: number[]): number[] {
  const countSort = new Array(100).fill(0);

  for (const num of arr) {
    countSort[num]++;
  }

  return countSort;
}

// Test
const arr = [1, 1, 3, 2, 1];
console.log(countingSort(arr));
