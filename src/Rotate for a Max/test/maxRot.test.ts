import { maxRot } from "../index";

describe("Rotate of a Max", () => {
  it("Should return the maximum number we got doing rotations of n.", () => {
    const tests = [
      { params: { n: 56789 }, output: 68957 },
      { params: { n: 38458215 }, output: 85821534 },
      { params: { n: 507992495 }, output: 507992495 },
      { params: { n: 83286488 }, output: 83286488 },
    ];

    for (let { params, output } of tests) {
      expect(maxRot(params.n)).toBe(output);
    }
  });
});
