// export default function squares(a: number, b: number): number {
// let count = 0;
// for (let i = a; i <= b; i++) {
//   if (Number.isInteger(Math.sqrt(i))) {
//     count += 1;
//   }
// }
// return count;
// }

export default function squares(a: number, b: number): number {
  const squareRootA = Math.ceil(Math.sqrt(a));
  const squareRootB = Math.floor(Math.sqrt(b));

  return squareRootB - squareRootA + 1;
}

// // Test
const a = 3;
const b = 9;
console.log(squares(a, b));
