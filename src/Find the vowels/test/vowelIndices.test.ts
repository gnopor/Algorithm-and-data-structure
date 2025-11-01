import { vowelIndices } from "../index";

describe("Find the vowels", () => {
  it("Should return the indexes of the vowels contained in the word.", () => {
    const parenStr1 = "YoMama";
    const parenStr2 = "XbdX";

    const expectedOutput1 = [1, 2, 4, 6];
    const expectedOutput2 = [];

    expect(vowelIndices(parenStr1).toString()).toBe(expectedOutput1.toString());
    expect(vowelIndices(parenStr2).toString()).toBe(expectedOutput2.toString());
  });
});
