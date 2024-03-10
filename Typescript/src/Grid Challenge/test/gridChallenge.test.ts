import gridChallenge from "../index";

describe("Grid Challenge", () => {
  it("Should return YES if the characters can be sorted, ascending on the rows and columns, and NO if not", () => {
    const grid = ["ebacd", "fghij", "olmkn", "trpqs", "xywuv"];
    const expectedResult = "YES";

    expect(gridChallenge(grid)).toBe(expectedResult);
  });
});
