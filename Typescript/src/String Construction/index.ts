export default function stringConstruction(s: string): number {
  let cost = 0;
  const charactersMap: Record<string, boolean> = {};

  for (const character of s) {
    if (charactersMap[character]) continue;

    charactersMap[character] = true;
    cost += 1;
  }

  return cost;
}

// test
const s = "abab";
console.log(stringConstruction(s));
