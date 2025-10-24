export default function kangaroo(
  x1: number,
  v1: number,
  x2: number,
  v2: number
): string {
  const limit = 10000;
  const willCatch = (condition: boolean) => (condition ? "YES" : "NO");

  if (x1 > x2 && v1 > v2) {
    return willCatch(false);
  }

  if (x2 > x1 && v2 > v1) {
    return willCatch(false);
  }

  for (let i = 1; i <= limit; i++) {
    const condition = x1 + v1 * i === x2 + v2 * i;
    if (condition) {
      return willCatch(true);
    }
  }

  return willCatch(false);
}

// test

// console.log(kangaroo(0, 2, 5, 3));
