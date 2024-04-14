import maximumPerimeterTriangle from "../index";

describe("Maximum Perimeter Triangle", () => {
  it("Should return the side lengths of the chosen triangle in non-decreasing order or -1", () => {
    const sticks = [1, 2, 3, 4, 5, 10];
    const expectedResult = [3, 4, 5];

    expect(maximumPerimeterTriangle(sticks).toString()).toBe(
      expectedResult.toString()
    );
  });
});
