import hackerrankInString from "../index";

describe("HackerRank in a String", () => {
  it("Should 'YES' if true and 'NO' if false", () => {
    const s = "hereiamstackerrank";
    const expectedResult = "YES";

    expect(hackerrankInString(s)).toBe(expectedResult);
  });
});
