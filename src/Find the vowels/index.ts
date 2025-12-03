export function vowelIndices(word: string): number[] {
  const result: number[] = [];
  const vowels = ["a", "e", "i", "o", "u", "y"];

  for (let i = 0; i < word.length; i++) {
    if (!vowels.includes(word[i].toLowerCase())) continue;
    result.push(i + 1);
  }

  return result;
}

// Test
const word = "yomama";
console.log(vowelIndices(word));
