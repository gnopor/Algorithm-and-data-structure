import { validateBase } from "../index";

describe("Check whether a number is valid in a given numeral system", () => {
  it("should return true for numbers that are parts of the specified base.", () => {
    const num1 = "ABC2356";
    const base1 = 9;
    const num2 = "EG";
    const base2 = 20;
    const expectedResult1 = false;
    const expectedResult2 = true;

    expect(validateBase(num1, base1)).toBe(expectedResult1);
    expect(validateBase(num2, base2)).toBe(expectedResult2);
  });
});
