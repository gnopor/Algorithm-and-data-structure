export function adjacentElementsProduct(arr: number[]): number {
  let result = -Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    let tmp = arr[i] * arr[i + 1];
    if (tmp < result) continue;
    result = tmp;
  }

  return result;
}

const params = [
  { arr: [1, 2, 3] },
  { arr: [9, 5, 10, 2, 24, -1, -48] },
  { arr: [-23, 4, -5, 99, -27, 329, -2, 7, -921] },
];

for (let p of params) {
  console.log(
    `- input: ${JSON.stringify(p)} \n- ouput: ${adjacentElementsProduct(p.arr)}\n`,
  );
}
