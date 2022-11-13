export default function sortArray(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        const greater = arr[i];
        arr[i] = arr[j];
        arr[j] = greater;
      }
    }
  }

  return arr;
}

// test ---------

const arr = [3, 233, 0, -123, 2000, -2, 9, 5, 2, 1, 2, -10];
console.log(sortArray(arr));
