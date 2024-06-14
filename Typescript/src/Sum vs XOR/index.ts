// export default function sumXor(n: number): number {
//   let countMatches = 0;

//   const xor = (a: number, b: number) => a ^ b;
//   const sum = (a: number, b: number) => a + b;

//   for (let i = 0; i <= n; i++) {
//     if (xor(n, i) != sum(n, i)) continue;

//     countMatches += 1;
//   }

//   return countMatches;
// }

// Help from https://medium.com/@mlgerardvla/hackerrank-sum-vs-xor-63e18dbd11cf

export default function sumXor(n: number): number {
  let zeroCount = 0;
  const binaryString = n.toString(2);

  if (n == 0) {
    return 1;
  }

  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] !== "0") continue;

    zeroCount += 1;
  }

  return Math.pow(2, zeroCount);
}

// test
const n = 1000000000000000;
// const n = 0;
console.log(sumXor(n));
