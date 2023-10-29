export default function alternatingCharacters(s: string): number {
  let count = 0;
  let lastCharacter = s[0];
  for (let i = 1; i < s.length; i++) {
    const character = s[i];
    if (character === lastCharacter) {
      count += 1;
    }

    lastCharacter = character;
  }

  return count;
}

// Test
const s = "BABABA";
console.log(alternatingCharacters(s));
