export function isInteresting(
  n: number,
  awesomePhrases: number[],
  firstStep = true
): number {
  const digits = n
    .toString()
    .split("")
    .map((d) => +d);
  const length = digits.length;

  const set1 = new Set(digits.slice(1));
  if (length > 2 && set1.size == 1 && set1.has(0)) return 2;

  if (length > 2 && new Set(digits).size == 1) return 2;

  let isSequentialIn = true;
  for (let i = 1; i < length; i++) {
    if (digits[i] == 0 && digits[i - 1] == 9) continue;
    if (digits[i - 1] + 1 == digits[i]) continue;

    isSequentialIn = false;
    break;
  }
  if (length > 2 && isSequentialIn) return 2;

  let isSequentialDec = true;
  for (let i = 1; i < length; i++) {
    if (digits[i - 1] - 1 == digits[i]) continue;

    isSequentialDec = false;
    break;
  }
  if (length > 2 && isSequentialDec) return 2;

  const middle1 = Math.floor(length / 2);
  const middle2 = length % 2 == 0 ? middle1 : middle1 + 1;

  if (
    length > 2 &&
    digits.slice(0, middle1).join("") ==
      digits.slice(middle2).reverse().join("")
  ) {
    return 2;
  }

  if (awesomePhrases.includes(n)) return 2;

  if (
    firstStep &&
    [
      isInteresting(n + 1, awesomePhrases, false),
      isInteresting(n + 2, awesomePhrases, false),
    ].includes(2)
  ) {
    return 1;
  }

  return 0;
}

// test
// const n = 3236;
// const awesomePhrases = [1337, 256];
const n = 98;
const awesomePhrases: number[] = [];
console.log(isInteresting(n, awesomePhrases));
