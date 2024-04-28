export default function decentNumber(n: number): void {
  let value = "-1";

  if (n < 3) {
    console.log(value);
    return;
  }
  if (n == 3) {
    console.log("5".repeat(3));
    return;
  }
  if (n == 5) {
    console.log("3".repeat(5));
    return;
  }

  for (let i = n; i >= 0; i = i - 5) {
    const count5s = i;
    const count3s = n - i;

    // console.log({
    //   count3s,
    //   rcount3s: count3s % 5,
    //   count5s,
    //   rcount5s: count5s % 3,
    // });
    if (!(count5s % 3 == 0 && count3s % 5 == 0)) continue;

    value = `${"5".repeat(count5s)}${"3".repeat(count3s)}`;
    break;
  }

  console.log(value);
}

// test
// const n = 11;
const n = 10;
decentNumber(n);
