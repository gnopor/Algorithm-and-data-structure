function countApplesAndOranges(
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[]
): void {
  let num_m = 0;
  let num_n = 0;

  for (let m of apples) {
    const d = a + m;

    d >= s && d <= t && num_m++;
  }

  for (let n of oranges) {
    const d = b + n;
    d >= s && d <= t && num_n++;
  }

  console.log(num_m);
  console.log(num_n);
}

// test
// countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);

module.exports = countApplesAndOranges;
