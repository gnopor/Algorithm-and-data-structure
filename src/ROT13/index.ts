export default function rot13(str: string): string {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const charactersMap: Record<
    string,
    { uppercase: string; lowercase: string; rank: number }
  > = {};
  for (let i = 0; i < characters.length; i++) {
    const char = characters[i];
    charactersMap[char] = {
      rank: i + 1,
      lowercase: char,
      uppercase: char.toUpperCase(),
    };
  }

  let result = new Array<string>(str.length).fill("");
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const charObject = charactersMap[char.toLowerCase()];
    if (!charObject) {
      result[i] = char;
      continue;
    }

    let newRank = charObject.rank + 13;
    if (newRank > 26) newRank = newRank % 26;

    const newChar = characters[newRank - 1];

    result[i] =
      char == charObject.lowercase
        ? newChar.toLowerCase()
        : newChar.toUpperCase();
  }

  return result.join("");
}

// Test
// const str = "EBG13 rknzcyr.";
const str = "This is my first ROT13 excercise!";

console.log(rot13(str));
