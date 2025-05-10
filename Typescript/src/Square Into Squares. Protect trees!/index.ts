// export const decompose = (n: number): null | number[] => {
//   const square = n * n;
//   const countSort: number[] = [];

//   for (let i = 1; i < n; i++) {
//     countSort.push(i * i);
//   }

//   for (let i = n - 2; i >= 0; i--) {
//     let items: number[] = [i + 1];
//     let sum = countSort[i];

//     let j = i - 1;
//     while (j >= 0) {
//       const newSum = sum + countSort[j];

//       if (newSum <= square) {
//         items.push(j + 1);
//         sum = newSum;
//       }

//       if (sum == square) {
//         return items.reverse();
//       }

//       if (j == 0 && items[1] > 1) {
//         j = items[1] - 1;

//         items = [i + 1];
//         sum = countSort[i];
//       }

//       j = j - 1;
//     }
//   }

//   return null;
// };

// // test
// // const n = 11;
// // const n = 50;
// // const n = 44;
// const n = 5;
// console.log(decompose(n));

//  https://github.com/yangzj1992/FE-Questions/blob/master/codewars/54eb33e5bc1a25440d000891.Square%20into%20Squares.%20Protect%20trees!/Square%20into%20Squares.%20Protect%20trees!.md

export function decompose(n: number): null | number[] {
  const decomposer = (n: number, remain: number): null | number[] => {
    if (remain === 0) {
      return [n];
    }

    for (let i = n - 1; i >= 1; i--) {
      if (remain - i * i >= 0) {
        let result = decomposer(i, remain - i * i);
        if (result != null) {
          result.push(i);
          return result;
        }
      }
    }

    return null;
  };

  const result = decomposer(n, n * n);
  return result == null ? null : result.slice(1);
}

// test
const n = 11;
// const n = 50;
// const n = 44;
// const n = 5;
console.log(decompose(n));
