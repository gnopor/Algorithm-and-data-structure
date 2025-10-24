// export default function stones(n: number, a: number, b: number): number[] {
//   const length = Math.pow(2, n - 1);

//   console.log(length);
//   // const matrix = new Array<number[]>(length).fill([]);
//   const possibleValues: number[] = []; // new Array<number>(length).fill(0);

//   let step = length / 2;
//   while (step >= 1) {
//     let isOdd = true;
//     for (let i = 0; i < length; i += step) {
//       for (let j = i; j < i + step; j++) {
//         // if (!matrix[j]) {
//         //   matrix[j] = [];
//         // }

//         // matrix[j].push(isOdd ? a : b);

//         if (!possibleValues[j]) {
//           possibleValues[j] = 0;
//         }
//         possibleValues[j] += isOdd ? a : b;
//       }

//       isOdd = !isOdd;
//     }

//     step = step / 2;
//   }

//   return Array.from(new Set(possibleValues));
// }

// www.hackerrank.com/challenges/manasa-and-stones/forum/comments/1257934
export default function stones(n: number, a: number, b: number): number[] {
  const possibleValues = new Set<number>();

  let aMultiplier = n - 1;
  let bMultiplier = 0;

  while (aMultiplier >= 0) {
    possibleValues.add(aMultiplier * a + bMultiplier * b);
    aMultiplier--;
    bMultiplier++;
  }

  return Array.from(new Set(possibleValues)).sort((a, b) => a - b);
}

// Test
const n = 4;
const a = 10;
const b = 100;

console.log(stones(n, a, b));
