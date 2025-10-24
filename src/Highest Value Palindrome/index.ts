// export default function highestValuePalindrome(
//   s: string,
//   n: number,
//   k: number
// ): string {
//   const digits = s.split("");

//   const filler = "9";
//   let changes = 0;
//   let middle = Math.ceil(n / 2);

//   const left: string[] = digits.slice(0, middle);
//   const right: string[] = digits.slice(middle).reverse();

//   // Make sure both side have the same value from inner to outer
//   for (let i = right.length - 1; i >= 0; i--) {
//     if (k - changes == 0) break;

//     if (i == 0 && k - changes >= 2 && ![right[i], left[i]].includes(filler)) {
//       left[i] = filler;
//       right[i] = filler;

//       changes += 2;
//       continue;
//     }

//     if (left[i] != right[i] && k - changes >= 1 && left[i] > right[i]) {
//       right[i] = left[i];
//       changes += 1;
//     } else if (left[i] != right[i] && k - changes >= 1 && right[i] > left[i]) {
//       left[i] = right[i];
//       changes += 1;
//     }
//   }

//   // Fill the will "Filler" if possible from outer to inner
//   for (let i = 0; i < right.length; i++) {
//     if (k - changes < 2) break;

//     if (![right[i], left[i]].includes(filler)) {
//       left[i] = filler;
//       right[i] = filler;

//       changes += 2;
//       continue;
//     }
//   }

//   if (left.slice(0, right.length).join("") != right.join("")) return "-1";

//   const result = left.concat(right.reverse());

//   for (let i = 0; i < right.length; i++) {
//     if (k - changes < 1) break;
//     const j = result.length - 1 - i;

//     const digitsLeft = digits[i];
//     const digitsRight = digits[j];

//     const resultLeft = result[i];
//     const resultRight = result[j];

//     if ([digitsLeft, resultLeft, digitsRight, resultRight].includes(filler)) {
//       continue;
//     }
//     if (digitsLeft != resultLeft || digitsRight != resultRight) {
//       result[i] = filler;
//       result[j] = filler;
//       changes += 1;
//     }
//   }

//   // Fill the middle for an odd number of digit
//   if (n % 2 != 0 && k - changes > 0 && result[left.length - 1] != filler) {
//     result[left.length - 1] = filler;
//     changes += 1;
//   }

//   return result.join("");
// }

// -----------------------------------------------------------------------------------------

export default function highestValuePalindrome(
  s: string,
  n: number,
  k: number
): string {
  const digits = s.split("");

  const filler = "9";
  let changeCount = 0;
  let diffCount = 0;
  let middle = Math.ceil(n / 2);

  const left: string[] = digits.slice(0, middle);
  const right: string[] = digits.slice(middle).reverse();

  // Check the number of differences
  for (let i = 0; i < right.length; i++) {
    if (left[i] == right[i]) continue;
    diffCount += 1;
  }

  // Fill differences
  for (let i = 0; i < right.length; i++) {
    if (changeCount >= k) break;

    if (
      left[i] == right[i] &&
      left[i] != filler &&
      k - changeCount - 2 >= diffCount
    ) {
      left[i] = filler;
      right[i] = filler;

      changeCount += 2;
      continue;
    }

    if (
      left[i] != right[i] &&
      [left[i], right[i]].includes(filler) &&
      k - changeCount - 1 >= diffCount - 1
    ) {
      left[i] = filler;
      right[i] = filler;

      changeCount += 1;
      diffCount -= 1;
      continue;
    }

    if (
      left[i] != right[i] &&
      ![left[i], right[i]].includes(filler) &&
      k - changeCount - 2 >= diffCount - 1
    ) {
      left[i] = filler;
      right[i] = filler;

      changeCount += 2;
      diffCount -= 1;
      continue;
    }

    if (
      left[i] != right[i] &&
      ![left[i], right[i]].includes(filler) &&
      k - changeCount - 1 >= diffCount - 1
    ) {
      left[i] = left[i] > right[i] ? left[i] : right[i];
      right[i] = left[i] > right[i] ? left[i] : right[i];

      changeCount += 2;
      diffCount -= 1;
      continue;
    }
  }

  if (left.slice(0, right.length).join("") != right.join("")) return "-1";

  const result = left.concat(right.reverse());

  // Fill the middle for an odd number of digit
  if (n % 2 != 0 && k - changeCount > 0) {
    result[left.length - 1] = filler;
    changeCount += 1;
  }

  return result.join("");
}

// Test
// const s = "1231";
// const k = 3;

// const s = "12321";
// const k = 1;

const s = "11331";
const k = 4;

console.log(highestValuePalindrome(s, s.length, k));
