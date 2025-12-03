import palindromeIndex from "../index";

describe("Palindrome index", () => {
  it("Function should return the index of the character to remove", () => {
    const s = "baa";
    const expectedResult = 0;

    expect(palindromeIndex(s)).toBe(expectedResult);
  });
});
