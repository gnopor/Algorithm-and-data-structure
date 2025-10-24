export default function happyLadybugs(b: string): string {
  const EMPTY_CHARACTER = "_";

  const isBugHappy = (str: string, i: number) =>
    str[i - 1] == str[i] || str[i + 1] == str[i];

  const mapColorToPositions: Record<string, number> = {};
  let isInitiallyHappy = true;
  for (let i = 0; i < b.length; i++) {
    const character = b[i];
    if (!mapColorToPositions[character]) {
      mapColorToPositions[character] = 0;
    }
    mapColorToPositions[character]++;

    if (character == EMPTY_CHARACTER) continue;
    if (!isInitiallyHappy) continue;
    isInitiallyHappy = isInitiallyHappy && isBugHappy(b, i);
  }

  if (!mapColorToPositions[EMPTY_CHARACTER]) {
    return isInitiallyHappy ? "YES" : "NO";
  }

  for (const [key, value] of Object.entries(mapColorToPositions)) {
    if (key === EMPTY_CHARACTER) continue;
    if (value < 2) return "NO";
  }

  return "YES";
}

// Test
const b = "RRRR";

console.log(happyLadybugs(b));
