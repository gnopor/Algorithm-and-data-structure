import twoStrings from "../index";

describe("Two Strings", () => {
  it("Should return YES if the strings share a substring and NO if not", () => {
    const s1 = "hello";
    const s2 = "world";
    const expectedResult = "YES";

    expect(twoStrings(s1, s2)).toBe(expectedResult);
  });
});
