export default function closestNumbers(arr: number[]): number[] {
  const differenceMap: Record<number, number[]> = {};
  let minimumDifference = Infinity;

  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    const numA = arr[i];
    const numB = arr[i + 1];
    const difference = numB - numA;

    console.log({ numA, numB, difference, minimumDifference });

    if (difference > minimumDifference) continue;

    minimumDifference = difference;
    if (!differenceMap[minimumDifference]) {
      differenceMap[minimumDifference] = [];
    }

    differenceMap[minimumDifference].push(numA, numB);
  }

  return differenceMap[minimumDifference];
}

// Test

const arr = [
  -20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594,
  266854,
];
console.log(closestNumbers(arr));
