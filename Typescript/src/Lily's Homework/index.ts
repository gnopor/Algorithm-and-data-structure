// As the challenge has highlighted the fact that | arr[i] - arr[i - 1] | should be the minimum,
// we then need to perform the swaps based on both ascending and descending sorted arrays and
// return swap with the least count needed.

export default function lilysHomework(arr: number[]): number {
  let array1 = arr;
  let array2 = [...arr];

  const numberMap1 = arr.reduce(
    (prev: { [key: number]: number }, current, i) => {
      prev[current] = i;
      return prev;
    },
    {}
  );
  const numberMap2 = { ...numberMap1 };

  const sortedArr1 = Object.keys(numberMap1);
  const sortedArr2 = Object.keys(numberMap2).sort((a, b) => +b - +a);

  const swap = (
    array: number[],
    sortedArr: (number | string)[],
    numberMap: { [key: number]: number }
  ): number => {
    let count = 0;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] !== +sortedArr[i]) {
        const tmpValue = array[i];
        const tmpIndex = numberMap[+sortedArr[i]];

        array[i] = +sortedArr[i];
        array[tmpIndex] = tmpValue;

        numberMap[array[i]] = i;
        numberMap[tmpValue] = tmpIndex;

        count++;
      }
    }
    return count;
  };

  const count1 = swap(array1, sortedArr1, numberMap1);
  const count2 = swap(array2, sortedArr2, numberMap2);

  return count1 > count2 ? count2 : count1;
}

// // Test
// // const arr = [7, 15, 12, 3];
// // const arr = [2, 5, 3, 1];
// // const arr = [3, 4, 2, 5, 1];
// const arr = [7, 3, 0, 4, 1, 6, 5, 2];
// console.log(lilysHomework(arr));
