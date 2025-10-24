export default function bigSorting(unsorted: string[]): string[] {
  // const numbers = unsorted.map((value) => BigInt(value));

  // for (let i = 0; i < numbers.length; i++) {
  //   for (let j = i + 1; j < numbers.length; j++) {
  //     if (numbers[i] <= numbers[j]) continue;

  //     const tmpValue = numbers[i];
  //     numbers[i] = numbers[j];
  //     numbers[j] = tmpValue;
  //   }
  // }

  // return numbers.map((value) => String(value));

  unsorted.sort((a, b) => Number(BigInt(a) - BigInt(b)));
  return unsorted;
}

// Test

const unsorted = ["31415926535897932384626433832795", "1", "10", "3", "5", "3"];
console.log(bigSorting(unsorted));
