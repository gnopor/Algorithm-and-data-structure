function unboundedKnapsack(k: number, arr: number[]): number {
  let result = 0;

  let sortedIndex: { [key: number]: number } = {};
  let sortedRest: { [key: number]: number } = {};
  let sortedArr: string[] = [];
  let sortedArrByRest: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > k) {
      continue;
    }
    sortedIndex[arr[i]] = i;
    sortedRest[k % arr[i]] = arr[i];
  }

  sortedArr = Object.keys(sortedIndex);
  for (let value of Object.values(sortedRest)) {
    sortedArrByRest.push(value);
  }

  //   console.log({ sortedIndex, sortedArr, sortedRest, sortedArrByRest });

  if (sortedRest[0]) {
    return k;
  }

  //   const getSum = (k2: number, arr2: number[]): number => {
  //     let sortedRest2: { [key: number]: number } = {};

  //     for (let i = 0; i < arr2.length; i++) {
  //       if (arr2[i] > k2) {
  //         continue;
  //       }
  //       sortedRest2[k % arr2[i]] = arr2[i];
  //     }

  //     for (let value of Object.values(sortedRest2)) {
  //       return value;
  //     }
  //   };

  //   const sum = getSum(k, arr);

  result = sortedArrByRest[0] * (k % sortedArrByRest[0]);

  console.log({ k, arr: arr.length });
  return result;
}

// Test

const k = 12;
const arr = [5, 9];
console.log(unboundedKnapsack(k, arr));
