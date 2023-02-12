export default function libraryFine(
  d1: number,
  m1: number,
  y1: number,
  d2: number,
  m2: number,
  y2: number
): number {
  if (y1 > y2) {
    return (y1 - y2) * 10000;
  }

  if (y1 === y2 && m1 > m2) {
    return (m1 - m2) * 500;
  }

  if (y1 === y2 && m1 === m2 && d1 > d2) {
    return (d1 - d2) * 15;
  }

  return 0;
}

// Test
const d1 = 9;
const m1 = 7;
const y1 = 2018;
const d2 = 6;
const m2 = 7;
const y2 = 2018;
console.log(libraryFine(d1, m1, y1, d2, m2, y2));
