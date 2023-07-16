export default function runningTime(arr: number[]): number {
  let shifts = 0;

  const shiftValues = (i: number, j: number) => {
    let tmp = arr[j];

    for (let k = j; k > i; k--) {
      arr[k] = arr[k - 1];
      shifts += 1;
    }
    arr[i] = tmp;
  };

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        shiftValues(i, j);
        continue;
      }
    }
  }

  return shifts;
}

// Test
const arr = [2, 1, 3, 1, 2];

console.log(runningTime(arr));
