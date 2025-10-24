export default function solution(numbers: number[]): number {
  const length = numbers.length;

  let allEqual = false;
  while (!allEqual) {
    allEqual = true;

    for (let i = 0; i < length - 1; i++) {
      if (numbers[i] == numbers[i + 1]) {
        continue;
      }

      allEqual = false;
      if (numbers[i] > numbers[i + 1]) {
        numbers[i] = numbers[i] - numbers[i + 1];
      } else {
        numbers[i + 1] = numbers[i + 1] - numbers[i];
      }
    }
  }

  return numbers[0] * length;
}

// test
const numbers = [6, 9, 21];
console.log(solution(numbers));
