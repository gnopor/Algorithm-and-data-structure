import gemstones from "../index";

describe("Gemstones", () => {
  it("Should return the correct number of gemstone", () => {
    const arr = ["abcdde", "baccd", "eeabg"];
    const expectedResult = 2;

    expect(gemstones(arr)).toBe(expectedResult);
  });
});
