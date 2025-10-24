export default function makingAnagrams(s1: string, s2: string): number {
  let deletionCount = 0;
  const charactersMap: Record<string, number> = {};

  for (const character of s1) {
    if (!charactersMap[character]) {
      charactersMap[character] = 0;
    }

    charactersMap[character] += 1;
  }

  for (const character of s2) {
    if (!charactersMap[character]) {
      deletionCount += 1;
      continue;
    }

    charactersMap[character] -= 1;
  }

  for (const value of Object.values(charactersMap)) {
    deletionCount += value;
  }

  return deletionCount;
}

// test
const s1 = "abc";
const s2 = "amnop";
console.log(makingAnagrams(s1, s2));
