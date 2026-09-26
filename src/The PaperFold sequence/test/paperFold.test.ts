import { paperFold, take } from "../index";

describe("The PaperFold sequence", () => {
  it("Should sequentially generates the values of this Paperfold sequence.", () => {
    const tests = [
      {
        params: { limit: 20 },
        output: [1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1],
      },
    ];

    const take = (n: number) => (gen: Generator) =>
      Array.from({ length: n }, () => gen.next().value);

    for (let { params, output } of tests) {
      expect(take(params.limit)(paperFold())).toEqual(output);
    }
  });
});
