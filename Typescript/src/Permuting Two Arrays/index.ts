export default function twoArrays(k: number, A: number[], B: number[]): string {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  console.log({ A, B });
  const length = A.length;
  for (let i = 0; i < length; i++) {
    if (A[i] + B[length - 1 - i] >= k) continue;

    return "NO";
  }

  return "YES";
}

// test
// const k = 10;
// const A = [2, 1, 3];
// const B = [7, 8, 9];

const k = 5;
const A = [1, 2, 2, 1];
const B = [3, 3, 3, 4];
console.log(twoArrays(k, A, B));
