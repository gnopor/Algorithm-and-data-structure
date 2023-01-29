import repeatedString from "../index";

describe("Plus Minus", () => {
  it("Function should print the correct statement", () => {
    const s = "aba";
    const n = 10;
    const expectedResult = 7;

    // 0.500000;
    // 0.333333;
    // 0.166666;

    expect(repeatedString(s, n)).toBe(7);
  });
});
