// function shortPalindrome(s: string): number {
//   let count = 0;

//   for (let i = 0; i <= s.length - 4; i = i + 1) {
//     for (let j = i + 1; j <= s.length - 3; j = j + 1) {
//       const originalSub = s[i] + s[j];

//       for (let k = j + 1; k <= s.length - 2; k = k + 1) {
//         for (let l = k + 1; l <= s.length - 1; l = l + 1) {
//           const testSub = s[l] + s[k];

//           if (originalSub === testSub) {
//             count += 1;
//           }
//         }
//       }
//     }
//   }

//   return count % (Math.pow(10, 9) + 7);
// }

function shortPalindrome(s: string): number {
  let count = 0;

  for (let i = 0; i <= s.length - 4; i = i + 2) {
    for (let j = i + 1; j <= s.length - 3; j = j + 1) {
      const os1 = s[i] + s[j];
      const os2 = s[i + 1] + s[j + 1];

      for (let k = j + 1; k <= s.length - 2; k = k + 1) {
        for (let l = k + 1; l <= s.length - 1; l = l + 1) {
          const ts1 = s[l] + s[k];
          const ts2 = s[l + 1] + s[k + 1];

          if (os1 === ts1) {
            count += 1;
          }

          if (os2 === ts2) {
            count += 1;
          }
        }
      }
    }
  }

  return count % (Math.pow(10, 9) + 7);
}

// Test
const s = "akakak";
console.log(shortPalindrome(s));
