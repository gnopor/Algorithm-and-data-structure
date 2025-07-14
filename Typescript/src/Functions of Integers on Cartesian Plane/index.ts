export function sumin(n: number): number {
  let sum = 0;
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += (n - i + 1) * i + sum;

    sum += i;
  }

  return total;
}
export function sumax(n: number): number {
  let sum = 0;
  let total = 0;

  for (let i = n; i > 0; i--) {
    total += i * i + sum;

    sum += i;
  }

  return total;
}

export function sumsum(n: number): number {
  let total = 0;

  const sum = (num1: number, num2: number) => (n * (num1 + num2)) / 2;

  for (let i = 1; i <= n; i++) {
    total += sum(i + 1, i + n);
  }

  return total;
}

// test

const n = 6;
console.log({ f: sumin(n), g: sumax(n), h: sumsum(n) });
