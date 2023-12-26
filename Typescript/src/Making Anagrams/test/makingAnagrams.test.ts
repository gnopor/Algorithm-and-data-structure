import makingAnagrams from "../index";

describe("Making Anagrams", () => {
  it("Should return the minimun number of deletion required to make an anagram", () => {
    const s1 = "abc";
    const s2 = "amnop";
    const expectedResult = 6;

    expect(makingAnagrams(s1, s2)).toBe(expectedResult);
  });
});
