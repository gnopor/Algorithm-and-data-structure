export default function almostSorted(arr: number[]): void {
  const numberMap: { [key: number]: number } = {};
  let sortedArr: string[] = [];
  let stringArrValue: string = "";
  let isSorted = true;

  for (let i = 0; i < arr.length; i++) {
    numberMap[arr[i]] = i;

    if (arr[i + 1] < arr[i]) {
      isSorted = false;
    }
  }

  sortedArr = Object.keys(numberMap);
  stringArrValue = sortedArr.join("");

  if (isSorted) {
    console.log("yes");
    return;
  }

  //   console.log({ isSorted, numberMap, sortedArr, stringArrValue });

  // Try swap
  let l = -1;
  let r = -1;
  let isSwaped = false;
  let arr1 = [...arr];
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] === +sortedArr[i]) {
      continue;
    }

    l = i;
    r = numberMap[+sortedArr[i]];
    const tmpValue = arr1[i];
    arr1[i] = arr1[r];
    arr1[r] = tmpValue;
    isSwaped = true;
    break;
  }

  if (isSwaped && stringArrValue === arr1.join("")) {
    console.log("yes");
    console.log(`swap ${l + 1} ${r + 1}`);
    return;
  }

  // Try reverse
  l = -1;
  r = -1;
  let isReversed = false;

  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === +sortedArr[i]) {
      arr2.push(arr[i]);
      continue;
    }

    isReversed = true;
    l = i;
    r = numberMap[+sortedArr[i]];

    const middle = arr.slice(l, r + 1).reverse();
    const suffix = arr.splice(r + 1);
    arr2 = arr2.concat(middle).concat(suffix);
    break;
  }

  if (isReversed && stringArrValue === arr2.join("")) {
    console.log("yes");
    console.log(`reverse ${l + 1} ${r + 1}`);
    return;
  }

  console.log("no");
}

// Test
const arr = [1, 5, 4, 3, 2, 6];
almostSorted(arr);
