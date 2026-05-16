export function countLettersAndDigits(input: string): number {
  let result = 0;
  const lowercaseRange: number[] = [97, 122];
  const digitRange: number[] = [48, 57];

  const isLetterOrDigit = (char: string): boolean => {
    const unicode = char.charCodeAt(0);

    if (unicode >= lowercaseRange[0] && unicode <= lowercaseRange[1]) {
      return true;
    }
    if (unicode >= digitRange[0] && unicode <= digitRange[1]) {
      return true;
    }
    return false;
  };

  for (let char of input) {
    if (!isLetterOrDigit(char.toLowerCase())) continue;
    result += 1;
  }

  return result;
}

const params = [{ input: "hel2!lo" }, { input: "12345f%%%t5t&/6" }];

for (let p of params) {
  console.log(
    `- input: ${JSON.stringify(p)} \n- ouput: ${countLettersAndDigits(p.input)}\n`,
  );
}
