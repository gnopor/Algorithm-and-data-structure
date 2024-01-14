export default function missingNumbers(arr: number[], brr: number[]): number[] {
  const arrMap: Record<string, number> = {};
  const brrMap: Record<string, number> = {};
  const result: number[] = [];

  for (let i = 0; i < brr.length; i++) {
    const arrNumber = arr[i];
    const brrNumber = brr[i];

    if (brrMap[brrNumber] === undefined) {
      brrMap[brrNumber] = 0;
    }
    brrMap[brrNumber] += 1;

    if (!arrNumber) continue;
    if (arrMap[arrNumber] === undefined) {
      arrMap[arrNumber] = 0;
    }
    arrMap[arrNumber] += 1;
  }

  for (const value of Object.keys(brrMap)) {
    if (brrMap[value] === arrMap[value]) continue;
    result.push(+value);
  }

  return result;
}

// test
const arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
const brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];
console.log(missingNumbers(arr, brr));
