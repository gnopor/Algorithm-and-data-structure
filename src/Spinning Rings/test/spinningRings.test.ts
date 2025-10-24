import { spinningRings } from "../index";

describe("Spinning Rings", () => {
  it("should return the number of moves it takes for both rings to have the same value.", () => {
    const innerMax1 = 2;
    const outerMax1 = 3;

    const innerMax2 = 1;
    const outerMax2 = 1;

    const expectedResult1 = 5;
    const expectedResult2 = 1;

    expect(spinningRings(innerMax1, outerMax1)).toBe(expectedResult1);
    expect(spinningRings(innerMax2, outerMax2)).toBe(expectedResult2);
  });
});
