export const decompose = (n: number): null | number[] => {
  const square = n * n;
  const countSort: number[] = [];

  for (let i = 1; i < n; i++) {
    countSort.push(i * i);
  }

  for (let i = n - 2; i >= 0; i--) {
    let items: number[] = [i + 1];
    let sum = countSort[i];

    let j = i - 1;
    while (j >= 0) {
      const newSum = sum + countSort[j];
      if (newSum <= square) {
        items.push(j + 1);
        sum = newSum;
      }

      if (sum == square) {
        return items.reverse();
      }

      if (j == 0 && items[1] > 1) {
        j = items[1] - 1;

        items = [i + 1];
        sum = countSort[i];
      }

      j = j - 1;
    }
  }

  return null;
};

// test
// const n = 11;
const n = 50;
console.log(decompose(n));
