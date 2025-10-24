export default function toCamelCase(str: string): string {
  const splitted = str.split(/-|_/);

  return splitted
    .map((word, i) =>
      i == 0 ? word : `${word[0].toUpperCase()}${word.slice(1)}`
    )
    .join("");
}

// Test
const str = "The_Stealth_Warrior";
console.log(toCamelCase(str));
