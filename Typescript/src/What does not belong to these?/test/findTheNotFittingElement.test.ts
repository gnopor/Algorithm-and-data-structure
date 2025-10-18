import { findTheNotFittingElement } from "../index";

describe("Spinning Rings", () => {
  it("should return the number of moves it takes for both rings to have the same value.", () => {
    const series1 = [true, true, true, false, true];

    const series2 = ["Z", "L", "P", "t", "G"];

    const expectedResult1 = false;
    const expectedResult2 = "t";

    expect(findTheNotFittingElement(series1)).toBe(expectedResult1);
    expect(findTheNotFittingElement(series2)).toBe(expectedResult2);
  });
});
