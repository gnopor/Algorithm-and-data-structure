import formingMagicSquare from "../index";

describe("Forming Magic Square", () => {
  it("Function should return the min cost.", () => {
    const s = [
      [4, 8, 2],
      [4, 5, 7],
      [6, 1, 6],
    ];
    const expectedResult = 4;

    expect(formingMagicSquare(s)).toBe(expectedResult);
  });
});
