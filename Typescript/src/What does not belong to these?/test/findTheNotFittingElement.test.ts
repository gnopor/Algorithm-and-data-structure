import { findTheNotFittingElement } from "../index";

describe("What does not belong to these?", () => {
  it("should return the item that does not belong to the provided series.", () => {
    const series1 = [true, true, true, false, true];

    const series2 = ["Z", "L", "P", "t", "G"];

    const expectedResult1 = false;
    const expectedResult2 = "t";

    expect(findTheNotFittingElement(series1)).toBe(expectedResult1);
    expect(findTheNotFittingElement(series2)).toBe(expectedResult2);
  });
});
