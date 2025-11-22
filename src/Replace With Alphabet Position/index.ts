export function alphabetPosition(text: string): string {
  const asciiRange = [97, 122];
  const positionDifference = 96;

  const result: number[] = [];

  for (let char of text.toLowerCase()) {
    const position = char.codePointAt(0);
    if (position && position >= asciiRange[0] && position <= asciiRange[1]) {
      result.push(position - positionDifference);
    }
  }

  return result.join(" ");
}

// test
const text = "The sunset sets at twelve o' clock.";
console.log(alphabetPosition(text));
