export default function maximumPerimeterTriangle(sticks: number[]): number[] {
  sticks.sort((a, b) => a - b);
  let result: number[] = [-1];

  const isNonDegenerate = (a: number, b: number, c: number) => {
    return a + b > c;
  };

  for (let i = 0; i < sticks.length; i += 1) {
    const a = sticks[i];
    const b = sticks[i + 1];
    const c = sticks[i + 2];

    if (!isNonDegenerate(a, b, c)) continue;
    result = [a, b, c];
  }

  return result;
}

// test

// const sticks = [1, 2, 3, 4, 5, 10];
// const sticks = [1, 2, 3];
const sticks = [1, 1, 1, 2, 3, 5];
console.log(maximumPerimeterTriangle(sticks));
