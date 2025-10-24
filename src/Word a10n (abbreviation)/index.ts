export function abbreviate(str: string): string {
  const found = str.match(/[a-zA-Z]{4,}/g) || [];

  let newString = str;
  for (let word of found) {
    const lenght = word.length;

    newString = newString.replace(
      word,
      `${word[0]}${lenght - 2}${word[lenght - 1]}`
    );
  }

  return newString;
}

//  test
const str = "elephant-rides are really fun!";
console.log(abbreviate(str));
