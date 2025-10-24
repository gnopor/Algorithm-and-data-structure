export default function utopianTree(n: number) {
  let height = 1;

  if (n === 0) return height;

  for (let i = 1; i <= n; i++) {
    height = i % 2 === 0 ? height + 1 : height * 2;
  }

  return height;
}

// test
const n = 4;

console.log(utopianTree(n));
