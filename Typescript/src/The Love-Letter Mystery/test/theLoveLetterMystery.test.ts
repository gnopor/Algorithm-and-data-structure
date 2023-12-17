import theLoveLetterMystery from "../index";

describe("The Love-Letter Mystery", () => {
  it("Should return the correct number of operations", () => {
    const s = "abcd";
    const expectedResult = 4;

    expect(theLoveLetterMystery(s)).toBe(expectedResult);
  });
});
