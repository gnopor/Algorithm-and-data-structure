import alternatingCharacters from "../index";

describe("Alternating Characters", () => {
  it("Should return the minimum number of deletion required", () => {
    const s = "AAABBB";
    const expectedResult = 4;

    expect(alternatingCharacters(s)).toBe(expectedResult);
  });
});
