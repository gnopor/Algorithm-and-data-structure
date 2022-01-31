import diagonalDifference from "../index";

describe("Diagonal Difference", () => {
  // let stack;
  // beforeEach(() => {
  //   stack = new Stack();
  // });

  it("diagonal difference with correct data", () => {
    const testArr = [
      [1, 2, 3],
      [4, 5, 6],
      [9, 8, 9],
    ];
    expect(diagonalDifference(testArr)).toBe(2);
  });
});
