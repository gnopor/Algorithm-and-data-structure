export default function gameOfThrones(s: string): string {
  const characterToCountMap: Record<string, number> = {};
  let oddNumberCount = 0;

  for (let character of s) {
    if (!characterToCountMap[character]) {
      characterToCountMap[character] = 0;
    }

    characterToCountMap[character] += 1;
  }

  for (let count of Object.values(characterToCountMap)) {
    const isOdd = count % 2 != 0;
    if (isOdd) {
      oddNumberCount += 1;
    }

    if (isOdd && oddNumberCount > 1) {
      return "NO";
    }
  }

  return "YES";
}

// Test

const s = "cdcdcdcdeeeef";
console.log(gameOfThrones(s));
