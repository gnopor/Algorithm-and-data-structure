import { sumDigits } from "../index";

describe("Summing a number's digits", () => {
  it("Should return the sum of the absolute value of each of the number's decimal digits.", () => {
    const n1 = -10000;
    const n2 = 552;

    const expectedOutput1 = 1;
    const expectedOutput2 = 12;

    expect(sumDigits(n1)).toBe(expectedOutput1);
    expect(sumDigits(n2)).toBe(expectedOutput2);
  });
});
