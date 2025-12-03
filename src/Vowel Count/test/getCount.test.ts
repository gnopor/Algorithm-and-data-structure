import { Kata } from "../index";

describe("Vowel Count", () => {
  it("Should return the number of vowel contained in the word.", () => {
    const word1 = "YoMama";
    const word2 = "XbdX";

    const expectedOutput1 = 3;
    const expectedOutput2 = 0;

    expect(Kata.getCount(word1)).toBe(expectedOutput1);
    expect(Kata.getCount(word2)).toBe(expectedOutput2);
  });
});
