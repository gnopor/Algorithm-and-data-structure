import { vowelIndices } from "../index";

describe("Find the vowels", () => {
  it("Should return the indexes of the vowels contained in the word.", () => {
    const word1 = "YoMama";
    const word2 = "XbdX";

    const expectedOutput1 = [1, 2, 4, 6];
    const expectedOutput2 = [];

    expect(vowelIndices(word1).toString()).toBe(expectedOutput1.toString());
    expect(vowelIndices(word2).toString()).toBe(expectedOutput2.toString());
  });
});
