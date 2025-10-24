export default function anagram(s: string): number {
  let minimumChange = 0;
  if (s.length % 2 != 0) return -1;

  const charactersMap: Record<string, number> = {};
  const part1 = s.substring(0, s.length / 2);
  const part2 = s.substring(s.length / 2);

  for (let character of part1) {
    if (!charactersMap[character]) {
      charactersMap[character] = 0;
    }

    charactersMap[character] += 1;
  }

  for (let character of part2) {
    if (!charactersMap[character]) {
      minimumChange += 1;
      continue;
    }

    charactersMap[character] -= 1;
  }

  return minimumChange;
}

// test
const s = "xaxbbbxx";
console.log(anagram(s));
