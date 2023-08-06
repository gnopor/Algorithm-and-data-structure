export default function findMedian(arr: number[]): number {
  const medianIndex = Math.floor(arr.length / 2);

  const sort = (items: number[]) => {
    for (let i = 1; i < items.length; i++) {
      for (let j = 0; j < i; j++) {
        if (items[i] > items[j]) continue;

        let tmp = items[i];
        items[i] = items[j];
        items[j] = tmp;
      }
    }
  };

  sort(arr);

  return arr[medianIndex];
}

// test
const arr = [5, 3, 1, 2, 4];
console.log(findMedian(arr));
