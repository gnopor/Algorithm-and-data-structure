// // My answer

// function pickingNumbers(a: number[]): number {
//   const subArrays: Array<Array<number>> = [];
//   const numArray = a.sort();
//   let index = 0;

//   const getAbsoluteValue = (num1: number, num2: number) =>
//     num1 > num2 ? num1 - num2 : num2 - num1;

//   const getAllLastElement = (arr: Array<number>, val: number) =>
//     arr.filter((num) => num === val);

//   for (let num of numArray) {
//     if (!subArrays[0]) {
//       subArrays[0] = [num];
//       continue;
//     }

//     const firstNumber = subArrays[index][0];
//     const lastNumber = subArrays[index][subArrays[index].length - 1];
//     if (
//       getAbsoluteValue(firstNumber, num) <= 1 &&
//       getAbsoluteValue(lastNumber, num) <= 1
//     ) {
//       subArrays[index].push(num);
//       continue;
//     }

//     index = index + 1;
//     if (
//       getAbsoluteValue(firstNumber, num) > 1 &&
//       getAbsoluteValue(lastNumber, num) <= 1
//     ) {
//       subArrays[index] = [...getAllLastElement(subArrays[index - 1], num), num];
//       continue;
//     }

//     subArrays[index] = [num];
//   }

//   return subArrays.reduce(
//     (prev: Array<number>, current) =>
//       prev.length > current.length ? prev : current,
//     []
//   ).length;
// }

// // My inspiration
export default function pickingNumbers(a) {
  var mySet = new Set();
  var maxCount = 0;
  for (var i = 0; i < a.length; i++) {
    var count = 0;
    if (!mySet.has(a[i])) {
      mySet.add(a[i]);
      for (var j = 0; j < a.length; j++) {
        if (a[j] == a[i] || a[j] == a[i] + 1) {
          count++;
        }
      }
      maxCount = Math.max(maxCount, count);
    }
  }
  return maxCount;
}

// test
// const arr = [
//   4, 2, 3, 4, 4, 9, 98, 98, 3, 3, 3, 4, 2, 98, 1, 98, 98, 1, 1, 4, 98, 2, 98, 3,
//   9, 9, 3, 1, 4, 1, 98, 9, 9, 2, 9, 4, 2, 2, 9, 98, 4, 98, 1, 3, 4, 9, 1, 98,
//   98, 4, 2, 3, 98, 98, 1, 99, 9, 98, 98, 3, 98, 98, 4, 98, 2, 98, 4, 2, 1, 1, 9,
//   2, 4,
// ];

// console.log(pickingNumbers(arr));
