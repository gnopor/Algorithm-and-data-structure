export default function activityNotifications(
  expenditure: number[],
  d: number
): number {
  let notification = 0;
  const countSort = new Array(201).fill(0);

  for (let i = 0; i < d; i++) {
    countSort[expenditure[i]]++;
  }

  //   const getMedian = () => {
  //     const index = d / 2;

  //     if (d % 2 !== 0) {
  //       const i1 = Math.ceil(index);
  //       console.log({ i1 });
  //       let m = 0;
  //       for (let j = 0, k = 0; k <= index; j++, k += countSort[j]) {
  //         m = j;
  //         console.log(countSort.slice(0, j + 1));
  //         console.log({ m, j, k, next: k + countSort[j] });
  //       }

  //       return m;
  //     }

  //     const i1 = index;
  //     const i2 = index + 1;
  //     let m1 = 0;
  //     let m2 = 0;

  //     for (let j = 0, k = 0; k <= i1; j++, k += countSort[j]) {
  //       m1 = j;
  //     }
  //     for (let j = 0, k = 0; k <= i2; j++, k += countSort[j]) {
  //       m2 = j;
  //     }

  //     return (m1 + m2) / 2;
  //   };

  let [i1, i2] = [Math.floor((d - 1) / 2), Math.ceil((d - 1) / 2)];
  let m1 = 0,
    m2 = 0,
    m = 0;

  for (let i = d; i < expenditure.length; i += 1) {
    // const m = getMedian();
    for (let j = 0, k = 0; k <= i1; k += countSort[j], j++) m1 = j;
    for (let j = 0, k = 0; k <= i2; k += countSort[j], j++) m2 = j;
    m = (m1 + m2) / 2;

    if (expenditure[i] >= 2 * m) {
      notification++;
    }

    countSort[expenditure[i]]++;
    countSort[expenditure[i - d]]--;
  }

  return notification;
}

// Test
const expenditure = [10, 20, 30, 40, 50];
const d = 3;
console.log(activityNotifications(expenditure, d));
