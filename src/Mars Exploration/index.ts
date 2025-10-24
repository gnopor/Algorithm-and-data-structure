export default function marsExploration(s: string): number {
  const sampleMessage = "SOS";

  let alteredCharacterCount = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char == sampleMessage[i % 3]) continue;
    alteredCharacterCount += 1;
  }

  return alteredCharacterCount;
}

// Test
const s = "SOSOOSOSOSOSOSSOSOSOSOSOSOS";

console.log(marsExploration(s));
