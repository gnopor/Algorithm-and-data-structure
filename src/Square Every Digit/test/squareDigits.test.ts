import { squareDigits } from "../index";

describe("Square Every Digit", () => {
  it("Should square every digit of a number and concatenate them.", () => {
    const tests = [
      {
        params: { num: 9119 },
        output: 811181,
      },
      {
        params: { num: 0 },
        output: 0,
      },
    ];

    for (let { params, output } of tests) {
      expect(squareDigits(params.num)).toBe(output);
    }
  });
});
