export default function timeInWords(h: number, m: number): string {
  const numbersToStringMap: Record<number, string> = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "quarter",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    21: "twenty one",
    22: "twenty two",
    23: "twenty three",
    24: "twenty four",
    25: "twenty five",
    26: "twenty six",
    27: "twenty seven",
    28: "twenty eight",
    29: "twenty nine",
    30: "half",
  };

  const hour = numbersToStringMap[m <= 30 ? h : h + 1];
  const minute = numbersToStringMap[m <= 30 ? m : 60 - m];
  const linkingWord = m <= 30 ? "past" : "to";

  if (m === 0) return `${hour} o' clock`;
  if ([15, 30, 45].includes(m)) return `${minute} ${linkingWord} ${hour}`;
  return `${minute} minute${m > 1 ? "s" : ""} ${linkingWord} ${hour}`;
}

// Test
const h = 7;
const m = 15;
console.log(timeInWords(h, m));
