import { stalinSort } from "../index";

describe("Stalin Sort", () => {
  it("Should sort the elements in the array using the Stalin Sort algorithm.", () => {
    const tests = [
      {
        params: { arr: [] },
        output: [],
      },
      {
        params: { arr: [3, 1, 4, 1, 5, 9, 2] },
        output: [3, 4, 5, 9],
      },
      {
        params: { arr: [5, 3, 1, 2, 4] },
        output: [5],
      },
    ];

    for (let { params, output } of tests) {
      stalinSort(params.arr);
      expect(params.arr).toBe(params.arr);
      expect(params.arr.toString()).toBe(output.toString());
    }
  });
});
