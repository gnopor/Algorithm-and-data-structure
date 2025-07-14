import { sumin, sumax, sumsum } from "../index";

describe("Functions of integers on Cartesian Plane", () => {
  it("Should return the right values of sums", () => {
    const n = 6;

    const expectedResult1 = 91;
    const expectedResult2 = 161;
    const expectedResult3 = 252;

    expect(sumin(n)).toBe(expectedResult1);
    expect(sumax(n)).toBe(expectedResult2);
    expect(sumsum(n)).toBe(expectedResult3);
  });
});
