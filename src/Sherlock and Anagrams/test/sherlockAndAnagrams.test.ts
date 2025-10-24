import sherlockAndAnagrams from "../index";

describe("Sherlock and Anagrams", () => {
  it("Return the number of unordered anagrammatic pairs of substrings in s", () => {
    const s = "ifailuhkqq";
    const expectedResult = 3;

    expect(sherlockAndAnagrams(s)).toBe(expectedResult);
  });
});
