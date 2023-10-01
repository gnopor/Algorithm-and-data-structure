export default function separateNumbers(s: string): void {
  if (s.length === 1) return console.log("NO");
  if (s[0] === "0") return console.log("NO");

  const getResult = (initialStep = 0): string[] => {
    const result: string[] = [];

    let i = 0;
    let step = initialStep;
    let length = 0;
    while (i < s.length) {
      const j = i + step + 1;

      const firstNumber = BigInt(s.slice(i, i + step + 1));
      const secondNumber = BigInt(s.slice(j, j + step + 1));
      const thirdNumber = BigInt(s.slice(j, j + step + 2));

      if (firstNumber + BigInt(1) === secondNumber) {
        if (i === 0) {
          result.push(String(firstNumber));
          length += step + 1;
        }
        result.push(String(secondNumber));

        i = j;
        length += step + 1;
        continue;
      }

      if (firstNumber + BigInt(1) === thirdNumber) {
        if (i === 0) {
          result.push(String(firstNumber));
          length += step + 1;
        }
        result.push(String(thirdNumber));

        i = j;
        length += step + 2;
        step += 1;
        continue;
      }

      step += 1;
      if (i + step >= s.length) break;
    }

    if (length != s.length && step < s.length) {
      return getResult(initialStep + 1);
    }

    return result;
  };

  const result = getResult();
  if (String(result.join("")).length != s.length) return console.log("NO");

  console.log(`YES ${result[0]}`);
}

// Test
const s = "93178437594967159317843759496716";
separateNumbers(s);
