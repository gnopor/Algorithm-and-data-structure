import twoPluses from "../index";

describe("Ema's Supercomputer", () => {
  it("Should return an integer denoting the maximum product of the eareas of the 2 non overlapping pluses", () => {
    const grid = [
      "GGGGGGGGGGGG",
      "GBGGBBBBBBBG",
      "GBGGBBBBBBBG",
      "GGGGGGGGGGGG",
      "GGGGGGGGGGGG",
      "GGGGGGGGGGGG",
      "GGGGGGGGGGGG",
      "GBGGBBBBBBBG",
      "GBGGBBBBBBBG",
      "GBGGBBBBBBBG",
      "GGGGGGGGGGGG",
      "GBGGBBBBBBBG",
    ];
    const expectedResult = 81;

    expect(twoPluses(grid)).toBe(expectedResult);
  });
});
