export default function gemstones(arr: string[]): number {
  const letterMap: Record<string, number> = {};
  const lockMap: Record<string, number> = {};

  for (let i = 0; i < arr.length; i++) {
    for (const letter of arr[i]) {
      if (!letterMap[letter]) {
        letterMap[letter] = 0;
        lockMap[letter] = -1;
      }

      if (lockMap[letter] != i) {
        letterMap[letter] += 1;
        lockMap[letter] = i;
      }
    }
  }

  let countResult = 0;
  for (let count of Object.values(letterMap)) {
    if (count != arr.length) continue;
    countResult += 1;
  }

  return countResult;
}

// test
const arr = ["abcdde", "baccd", "eeabg"];
console.log(gemstones(arr));
