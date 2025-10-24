import { reverseWords } from "../index";

describe("Reverse words", () => {
  it("Should return the same parameter string with each word reversed in it.", () => {
    const string1 = "This is an example!";
    const string2 = "double spaces";
    const string3 = "0323456";

    const expectedResult1 = "sihT si na !elpmaxe";
    const expectedResult2 = "elbuod secaps";
    const expectedResult3 = "6543230";

    expect(reverseWords(string1)).toBe(expectedResult1);
    expect(reverseWords(string2)).toBe(expectedResult2);
    expect(reverseWords(string3)).toBe(expectedResult3);
  });
});
