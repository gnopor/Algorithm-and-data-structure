export default function insertionSort2(n: number, arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[i] >= arr[j]) continue;

      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    console.log(arr.join(" "));
  }
}

// Test
const arr = [1, 4, 3, 5, 6, 2];
const n = arr.length;

console.log(insertionSort2(n, arr));
