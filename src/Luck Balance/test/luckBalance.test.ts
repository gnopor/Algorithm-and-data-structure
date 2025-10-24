import luckBalance from "../index";

describe("Luck Balance", () => {
  it("Should return the maximum luck balance achievable", () => {
    const k = 3;
    const contests = [
      [5, 1],
      [2, 1],
      [1, 1],
      [8, 1],
      [10, 0],
      [5, 0],
    ];
    const expectedResult = 29;

    expect(luckBalance(k, contests)).toBe(expectedResult);
  });
});
