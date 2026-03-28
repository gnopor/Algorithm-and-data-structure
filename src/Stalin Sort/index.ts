export function stalinSort(array: number[]): void {
  if (array.length <= 1) return;
  let finished = false;
  while (true) {
    for (let i = 1; i < array.length; i++) {
      finished = i == array.length - 1;
      console.log({ arrayLength: array.length, i, verdict: finished });

      if (array[i] >= array[i - 1]) continue;
      array.splice(i, 1);
      break;
    }

    if (finished) break;
  }
}

const params = [
  { array: [1, 2, 3, 4, 5] },
  { array: [5, 3, 1, 2, 4] },
  { array: [3, 1, 4, 1, 5, 9, 2] },
  { array: [1, 2, 2, 3, 1, 4] },
  { array: [] },
];

for (let p of params) {
  console.log(
    `- input: ${JSON.stringify(p)} \n- ouput: ${stalinSort(p.array)}\n`,
  );
}
