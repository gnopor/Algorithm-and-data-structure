import highestValuePalindrome from "../index";

describe("Cut The Sticks", () => {
  it("Function should return the highest value palindrome.", () => {
    const s = "11331";
    const k = 4;
    const expectedResult = "99399";

    expect(highestValuePalindrome(s, s.length, k)).toBe(expectedResult);
  });
});
