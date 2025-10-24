export function duplicateCount(text: string): number {
  const mapCharacterCount: Record<string, number> = {};
  let totalCount = 0;

  for (let char of text.toLowerCase().split("")) {
    if (!mapCharacterCount[char]) {
      mapCharacterCount[char] = 0;
    }

    mapCharacterCount[char] += 1;

    if (mapCharacterCount[char] == 2) {
      totalCount += 1;
    }
  }

  return totalCount;
}

//  test

const text = "aA11";

console.log(duplicateCount(text));
