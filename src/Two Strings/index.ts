export default function twoStrings(s1: string, s2: string): string {
  const charactersMap: Record<string, boolean> = {};

  for (const character of s1) {
    if (!charactersMap[character]) {
      charactersMap[character] = true;
    }
  }

  for (const character of s2) {
    if (charactersMap[character]) return "YES";
  }

  return "NO";
}

// test
const s1 = "be";
const s2 = "cat";
console.log(twoStrings(s1, s2));
