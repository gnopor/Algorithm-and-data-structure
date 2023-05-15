export default function workbook(n: number, k: number, arr: number[]): number {
  let specialCount = 0;
  let pageCount = 0;

  for (let exercices of arr) {
    const fullPages = Math.trunc(exercices / k);
    const notFullPageExercices = exercices % k;

    for (let i = 1; i <= fullPages; i++) {
      pageCount += 1;

      const startIndex = i * k - k + 1;
      const endIndex = i * k;

      if (pageCount >= startIndex && pageCount <= endIndex) {
        specialCount += 1;
      }
    }

    if (notFullPageExercices == 0) continue;
    pageCount += 1;

    const startIndex = exercices - notFullPageExercices + 1;
    const endIndex = exercices;

    if (pageCount >= startIndex && pageCount <= endIndex) {
      specialCount += 1;
    }
  }

  return specialCount;
}

// Test
const n = 5;
const k = 3;
const arr = [4, 2, 6, 1, 10];

console.log(workbook(n, k, arr));
