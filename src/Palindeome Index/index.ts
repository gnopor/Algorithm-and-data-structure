export default function palindromeIndex(s: string): number {
  let index = -1;
  const isEven = s.length % 2 == 0;
  const middle = Math.ceil(s.length / 2);

  for (let i = 0; i < s.length; i++) {
    if (!isEven && i === middle) break;

    const j = s.length - 1 - i;
    if (s[i] === s[j]) continue;

    const left = s.substring(i, i + 3);
    const right = `${s[j - 1]}${s[j - 2]}${s[j - 3]}`;

    return left === right ? j : i;
  }

  return index;
}

// Test

const s =
  "bsyhvwfuesumsehmytqioswvpcbxyolapfywdxeacyuruybhbwxjmrrmjxwbhbyuruycaexdwyfpaloyxbcpwsoiqtymhesmuseufwvhysb";
console.log(palindromeIndex(s));
