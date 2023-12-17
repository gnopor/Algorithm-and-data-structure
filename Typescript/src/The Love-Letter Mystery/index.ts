export default function theLoveLetterMystery(s: string): number {
  let operationCount = 0;

  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const alphabetMap: Record<string, number> = {};
  for (let i = 0; i < alphabet.length; i++) {
    alphabetMap[alphabet[i]] = i + 1;
  }

  let leftIndex = s.length / 2 - 1;
  let rightIndex = leftIndex + 1;
  const isOdd = s.length % 2 != 0;
  if (isOdd) {
    leftIndex = Math.floor(s.length / 2) - 1;
    rightIndex = leftIndex + 2;
  }

  while (leftIndex >= 0) {
    const left = alphabetMap[s[leftIndex]];
    const right = alphabetMap[s[rightIndex]];

    operationCount += Math.abs(left - right);

    leftIndex -= 1;
    rightIndex += 1;
  }

  return operationCount;
}

// test
const s = "cba";
console.log(theLoveLetterMystery(s));
