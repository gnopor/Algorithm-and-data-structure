export default function hackerrankInString(s: string): string {
  const word = "hackerrank";
  let newWord = "";
  let order = 0;

  for (let character of s) {
    if (character != word[order]) continue;

    newWord += character;
    order += 1;
  }

  return word.length === newWord.length ? "YES" : "NO";
}

// Test
const s = "hhaacckkekraraannk";
console.log(hackerrankInString(s));
