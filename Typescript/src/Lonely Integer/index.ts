export default function lonelyinteger(a: number[]): number {
  if (a.length === 1) return a[0];
  a.sort((a, b) => a - b);

  for (let i = 1; i < a.length; i++) {
    if (a[i - 1] == a[i] || a[i] == a[i + 1]) continue;

    return a[i];
  }

  return a[0];
}

// test

// const a = [3, 3, 3, 4];
const a = [0, 0, 1, 2, 1];
console.log(lonelyinteger(a));
