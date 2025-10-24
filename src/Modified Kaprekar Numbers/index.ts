export default function kaprekarNumbers(p: number, q: number) {
  const result: number[] = [];

  const addIfCorrect = (num: number, collection: number[]) => {
    const length = String(num).length;
    const squareString = Math.pow(num, 2).toString();
    const r = +squareString.slice(-length);
    const l = +squareString.slice(0, squareString.length - length);

    if (r + l === num) collection.push(num);
  };

  for (let i = p; i <= q; i++) {
    addIfCorrect(i, result);
  }

  console.log(result.length > 0 ? result.join(" ") : "INVALID RANGE");
}

const p = 1;
const q = 100;

kaprekarNumbers(p, q);
