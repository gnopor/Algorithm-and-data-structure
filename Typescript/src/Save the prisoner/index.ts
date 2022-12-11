export default function saveThePrisoner(
  n: number,
  m: number,
  s: number
): number {
  const position = n + m + s - 1;

  const rank = position % n;

  return rank !== 0 ? rank : n;
}

// // Test
// const n = 3;
// const m = 7;
// const s = 3;

// console.log(saveThePrisoner(n, m, s));
