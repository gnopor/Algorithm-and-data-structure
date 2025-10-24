import findDigits from "../index";

describe("Find Digits", () => {
  it("Function should return the right number of divisor", () => {
    const n = 1012;
    const expectedResult = 3;

    expect(findDigits(n)).toBe(expectedResult);
  });
});
