export default function alternate(s: string): number {
  const getAlternateLength = (
    text: string,
    letter1: string,
    letter2: string
  ): number => {
    let newText = "";
    for (const letter of text) {
      if (letter == newText[newText.length - 1]) return 0;
      if (letter == letter1 || letter == letter2) newText += letter;
    }

    return newText.length;
  };

  const singleCharacters = Array.from(new Set(s));
  if (singleCharacters.length === 1) return 0;

  let result: number[] = [];
  for (let i = 0; i < singleCharacters.length; i++) {
    for (let j = i + 1; j < singleCharacters.length; j++) {
      result.push(
        getAlternateLength(s, singleCharacters[i], singleCharacters[j])
      );
    }
  }

  return Math.max(...result);
}

// Test
const s = "aaaaa";

console.log(alternate(s));
