export function descendingOrder(n: number): number {
  const input: number[] = String(n)
    .split("")
    .map((n) => +n);

  input.sort((a, b) => b - a);

  return +input.join("");
}

// test
// const n = 5000;
// const n = 42145;
const n = 123456789;
console.log(descendingOrder(n));
