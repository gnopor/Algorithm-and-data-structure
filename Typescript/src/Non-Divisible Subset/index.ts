// export default function nonDivisibleSubset(k: number, s: number[]): number {
//   const resultMap: Record<string, Set<number>> = {};

//   for (let i = 0; i < s.length; i++) {
//     const item1 = s[i];

//     for (let j = i + 1; j < s.length; j++) {
//       const item2 = s[j];

//       const sum = s[i] + s[j];
//       if (sum % k == 0) continue;

//       if (!resultMap[item1]) {
//         resultMap[item1] = new Set();
//       }
//       resultMap[item1].add(item2);

//       if (!resultMap[item2]) {
//         resultMap[item2] = new Set();
//       }
//       resultMap[item2].add(item1);
//     }
//   }

//   console.log(resultMap);

//   const resultMap2: Record<string, number[]> = {};
//   let maxValue = 0;
//   let currentValue = 0;

//   for (const key of Object.keys(resultMap)) {
//     const arr = Array.from(resultMap[key]);
//     resultMap2[key] = [];

//     for (let i = 0; i < arr.length; i++) {
//       const item1 = arr[i];

//       for (let j = 0; j < arr.length; j++) {
//         const item2 = arr[j];
//         if (item1 == item2) continue;

//         if (!resultMap[item1].has(item2)) {
//           j = arr.length;
//           i = arr.length;
//           break;
//         }

//         if (j != arr.length - 1) continue;
//         // console.log({ item1, item2 });
//         currentValue += 1;
//         resultMap2[key].push(item1);
//       }
//     }

//     if (currentValue + 1 > maxValue) {
//       maxValue = currentValue + 1;
//     }
//     currentValue = 0;
//   }

//   console.log(resultMap2);

//   // for (let value of Object.values(resultMap)) {
//   //   if (value.size > maxValue) maxValue = value.size;
//   // }

//   return maxValue + 1;
// }

function nonDivisibleSubset(k: number, array: number[]) {
  let simple = new Array(k).fill(0);
  let count = 0;

  array.forEach((item) => simple[item % k]++);
  if (simple[0]) count++;
  if (simple[k / 2]) count++;

  for (let i = 1; i < k / 2; i++) {
    count += Math.max(simple[i], simple[k - i]);
  }

  return count;
}

// Test
// const k = 3;
// const s = [1, 7, 2, 4];
const k = 7;
const s = [
  278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436,
];
// const k = 4;
// const s = [19, 10, 12, 24, 25, 22];
console.log(nonDivisibleSubset(k, s));
