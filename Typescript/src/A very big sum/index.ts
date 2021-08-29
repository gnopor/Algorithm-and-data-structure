// ! ease

const array = [5, "1000000001 1000000002 1000000003 1000000004 1000000005"];

// 1 <= n <= 10;

// 0 <= ar[i] <= 1010;

function aVeryBigSum(ar: number[]): number {
  // const n = ar[0]
  // const numbers = ar[1].toString().split(" ")

  return ar.reduce((prev: number, current: number) => prev + current);
}
