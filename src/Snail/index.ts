export function snail(array: number[][]): number[] {
  const traverse = (arr: number[][], result: number[] = []): number[] => {
    if (arr.length == 0 || arr[0].length == 0) {
      return result;
    }

    const top: number[] = arr.shift() || [];
    const bottom: number[] = arr.pop() || [];
    const right: number[] = [];
    const left: number[] = [];

    for (let row of arr) {
      const newLeft = row.shift();
      const newRight = row.pop();

      newLeft && left.push(newLeft);
      newRight && right.push(newRight);
    }

    result = result
      .concat(top)
      .concat(right)
      .concat(bottom.reverse())
      .concat(left.reverse());
    return traverse(arr, result);
  };

  return traverse([...array]);
}

//  test

// const array = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
const array = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log(snail(array));
