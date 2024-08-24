export default function isValid(s: string): string {
  const charactersToFrequencyMap: Record<string, number> = {};
  const frequencyToCharacterCountMap: Record<string, number> = {};

  for (let character of s) {
    if (!charactersToFrequencyMap[character]) {
      charactersToFrequencyMap[character] = 0;
    }
    charactersToFrequencyMap[character] += 1;
  }

  for (let num of Object.values(charactersToFrequencyMap)) {
    if (!frequencyToCharacterCountMap[num]) {
      frequencyToCharacterCountMap[num] = 0;
    }
    frequencyToCharacterCountMap[num] += 1;
  }

  const frequencyList = Object.keys(frequencyToCharacterCountMap);
  if (frequencyList.length == 1) return "YES";
  if (frequencyList.length > 2) return "NO";

  const frequency1 = +frequencyList[0];
  const frequency2 = +frequencyList[1];
  if (
    (frequency1 == 1 && frequencyToCharacterCountMap[frequency1] == 1) ||
    (frequency2 == 1 && frequencyToCharacterCountMap[frequency2] == 1) ||
    (frequency1 == frequency2 - 1 &&
      frequencyToCharacterCountMap[frequency2] == 1)
  ) {
    return "YES";
  }

  return "NO";
}

// Test
// const s = "abcc";
const s = "abcdefghhgfedecba";
console.log(isValid(s));
