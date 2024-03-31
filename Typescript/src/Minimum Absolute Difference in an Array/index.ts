export default function minimumAbsoluteDifference(arr: number[]): number {
  let minimum = Infinity;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const difference = Math.abs(arr[i] - arr[j]);

      if (difference < minimum) {
        minimum = difference;
      }
    }
  }

  return minimum;
}

// test
// const arr = [-2, 2, 4];
// const arr = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];
const arr = [1, -3, 71, 68, 17];

console.log(minimumAbsoluteDifference(arr));
