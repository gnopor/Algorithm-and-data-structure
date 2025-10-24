// With help from discussion
export default function sherlockAndAnagrams(s: string): number {
  const wordMap: Record<string, number> = {};
  const totalMap: Record<string, number> = {};
  let count = 0;

  const getTotal = (num: number): number => {
    if (totalMap[num] != null) {
      return totalMap[num];
    }

    let total = 0;

    for (let i = 0; i < num; i++) {
      total += i;
    }

    totalMap[num] = total;
    return total;
  };

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const substring = s.slice(i, j).split("").sort().join("");
      if (!wordMap[substring]) {
        wordMap[substring] = 0;
      }

      wordMap[substring] += 1;
    }
  }

  for (const value of Object.values(wordMap)) {
    if (value < 2) continue;

    count += getTotal(value);
  }

  return count;
}

// Test

// const s = "mom";
// const s = "abba";
const s = "ifailuhkqq";
console.log(sherlockAndAnagrams(s));
