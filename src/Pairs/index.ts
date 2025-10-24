export default function pairs(k: number, arr: number[]): number {
  let count = 0;
  let valuesMap: { [key: number]: boolean } = {};

  for (let value of arr) {
    valuesMap[value] = true;
  }

  for (let value of arr) {
    if (valuesMap[value + k]) {
      count++;
    }
  }

  return count;
}

// Test
const k = 2;
const arr = [1, 5, 3, 4, 2];
console.log(pairs(k, arr));
