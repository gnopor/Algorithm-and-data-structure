export default function beautifulTriplets(d: number, arr: number[]): number {
  let count = 0;

  const numSet = new Set(arr);

  for (const num of arr) {
    if (numSet.has(num + d) && numSet.has(num + d + d)) {
      count += 1;
    }
  }

  return count;
}

// test
const d = 3;
const arr = [1, 2, 2, 4, 5, 7, 8, 10];
console.log(beautifulTriplets(d, arr));
