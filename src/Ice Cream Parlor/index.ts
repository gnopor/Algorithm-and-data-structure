export default function icecreamParlor(m: number, arr: number[]): number[] {
  const countSort = new Array(10000).fill(-1);
  for (let i = 0; i < arr.length; i++) {
    if (countSort[arr[i]] !== -1 && arr[countSort[arr[i]]] * 2 === m) {
      return [countSort[arr[i]] + 1, i + 1];
    }

    countSort[arr[i]] = i;
  }

  let result: Array<number> = [];
  for (let i = 1; i < m; i++) {
    if (countSort[i] === -1) {
      continue;
    }

    for (let j = i + 1; j < m; j++) {
      if (j + i === m) {
        if (countSort[j] === -1) {
          continue;
        }
        const i1 = countSort[i] + 1;
        const i2 = countSort[j] + 1;

        result = i1 < i2 ? [i1, i2] : [i2, i1];
      }
    }
  }

  return result;
}

// Test
// const m = 9;
// const arr = [1, 3, 4, 6, 7, 9];
// console.log(icecreamParlor(m, arr));
