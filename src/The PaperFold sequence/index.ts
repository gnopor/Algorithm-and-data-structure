export function* paperFold(): Generator<number, any, undefined> {
  const LIMIT = 1000_000;

  const compute = (arr: number[] = [1]): number[] => {
    const length = arr.length;
    if (length >= LIMIT) return arr;

    const newArr: number[] = [];
    for (let i = 0; i < length; i++) {
      const prexif = i % 2 == 0 ? 1 : 0;
      newArr.push(prexif, arr[i]);
    }
    newArr.push(0);

    return compute(newArr);
  };

  const result = compute();
  yield* result;
}

export const take = (n: number) => (gen: Generator) =>
  Array.from({ length: n }, () => gen.next().value);

const params = [{ limit: 20 }, { limit: 1000 }];

for (let p of params) {
  console.log(
    `- input: ${JSON.stringify(p)} \n- ouput: ${take(p.limit)(paperFold())}\n`,
  );
}

// Best solution
// export function* paperFold(): Generator {
//   let gen = paperFold();
//   while (true) {
//     yield 1;
//     yield gen.next().value;
//     yield 0;
//     yield gen.next().value;
//   }
// }
