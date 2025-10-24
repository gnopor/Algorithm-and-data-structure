import sumXor from "../index";

describe("Sum vs Xor", () => {
  it("Should return the number of matches (sum = xor) found", () => {
    const n = 10;
    const expectedResult = 4;

    expect(sumXor(n)).toBe(expectedResult);
  });
});
