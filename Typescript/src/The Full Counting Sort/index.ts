export default function countSort(arr: string[][]): void {
  const countSortArray = new Array<string>(arr.length).fill("");

  const length = arr.length;
  for (let i = 0; i < length; i++) {
    const index = +arr[i][0];
    const value = i < length / 2 ? " -" : ` ${arr[i][1]}`;

    countSortArray[index] += value;
  }

  console.log(countSortArray.join("").slice(1));
}

// test
const arr = [
  ["0", "a"],
  ["1", "b"],
  ["0", "c"],
  ["1", "d"],
];
console.log(countSort(arr));
