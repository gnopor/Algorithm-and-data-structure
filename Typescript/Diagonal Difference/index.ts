function diagonalDifference(arr: number[][]): number {
  const n: number = arr.length;
  const arr1 = new Array<number>();
  const arr2 = new Array<number>();

  for (let i = 0; i < n; i++) {
    arr1.push(arr[i][i]);
    arr2.push(arr[n - i - 1][i]);
  }

  const result =
    arr1.reduce((prev, current) => prev + current) -
    arr2.reduce((prev, current) => prev + current);

  return result > 0 ? result : -result;
}

const testArr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

console.log(diagonalDifference(testArr));

module.exports = diagonalDifference;
