import minimumAbsoluteDifference from "../index";

describe("Minimum Absolute Difference in an Array", () => {
  it("Should return the minimum absolute difference found", () => {
    const arr = [1, -3, 71, 68, 17];
    const expectedResult = 3;

    expect(minimumAbsoluteDifference(arr)).toBe(expectedResult);
  });
});
