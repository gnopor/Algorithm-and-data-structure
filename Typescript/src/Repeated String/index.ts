export default function repeatedString(s: string, n: number): number {
  const TARGET_CHAR = "a";

  let result = 0;
  const iterations = Math.trunc(n / s.length);
  const remainingStringLength = n % s.length;
  const remainingString = s.slice(0, remainingStringLength);

  const inialLetterChartCount = s.split("").reduce((prev, current) => {
    return current == TARGET_CHAR ? prev + 1 : prev;
  }, 0);

  result = inialLetterChartCount * iterations;
  for (let char of remainingString) {
    if (char !== TARGET_CHAR) continue;

    result += 1;
  }

  return result;
}

// test ==
const s = "aba";
const n = 10;
console.log(repeatedString(s, n));
