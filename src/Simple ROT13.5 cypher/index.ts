export function ROT135(input: string): string {
  if (input.length == 0) return "";
  const result: string[] = [];

  const rotateCode = (
    code: number,
    step: number,
    start: number,
    end: number,
  ): number => {
    const length = end - start + 1;
    return ((code + step - start) % length) + start;
  };

  const rotateChar = (char: string): string => {
    const code = char.codePointAt(0);
    if (!code) return char;

    if (code >= 48 && code <= 57) {
      return String.fromCharCode(rotateCode(code, 5, 48, 57));
    }
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(rotateCode(code, 13, 65, 90));
    }
    if (code >= 97 && code <= 122) {
      return String.fromCharCode(rotateCode(code, 13, 97, 122));
    }

    return char;
  };

  input.split("").forEach((char) => result.push(rotateChar(char)));

  return result.join("");
}

const params = [
  { input: "The quick brown fox jumps over the 2 lazy dogs" },
  { input: "Gur dhvpx oebja sbk whzcf bire gur 7 ynml qbtf" },
];

for (let p of params) {
  console.log(`- input: ${JSON.stringify(p)} \n- output: ${ROT135(p.input)}\n`);
}
