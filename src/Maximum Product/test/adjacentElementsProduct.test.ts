import { adjacentElementsProduct } from "../index";

describe("Maximum Product", () => {
  it("Should find the maximum product obtained from multiplying 2 adjacent numbers.", () => {
    const tests = [
      {
        params: { arr: [1, 2, 3] },
        output: 6,
      },
      {
        params: { arr: [9, 5, 10, 2, 24, -1, -48] },
        output: 50,
      },
      {
        params: { arr: [-23, 4, -5, 99, -27, 329, -2, 7, -921] },
        output: -14,
      },
    ];

    for (let { params, output } of tests) {
      expect(adjacentElementsProduct(params.arr)).toBe(output);
    }
  });
});
