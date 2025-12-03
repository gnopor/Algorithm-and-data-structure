import surfaceArea from "../index";

describe("3D Surface Area", () => {
  it("Function should return the right surface area", () => {
    const A = [
      [1, 3, 4],
      [2, 2, 3],
      [1, 2, 4],
    ];
    const expectedResult = 60;

    expect(surfaceArea(A)).toBe(expectedResult);
  });
});
