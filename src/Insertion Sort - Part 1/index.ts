export default function insertionSort1(n: number, arr: number[]) {
  const item = arr[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] <= item) {
      arr[i + 1] = item;
      console.log(arr.join(" "));
      break;
    }

    if (i == 0) {
      arr[i + 1] = arr[i];
      console.log(arr.join(" "));

      arr[i] = item;
      console.log(arr.join(" "));
      break;
    }

    arr[i + 1] = arr[i];
    console.log(arr.join(" "));
  }
}

// Test
const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
const n = arr.length;

console.log(insertionSort1(n, arr));
