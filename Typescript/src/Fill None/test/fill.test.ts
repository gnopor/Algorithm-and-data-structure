import fill from "../index";

describe("Fill None", () => {
  it("Should return the list filled with the correct value for the missing data", () => {
    const arr = [undefined, 1, undefined, undefined, undefined, 2, undefined];
    const expectedResult1 = [1, 1, 2, 2, 2, 2, undefined];
    const expectedResult2 = [1, 1, 1, 1, 2, 2, 2];
    const expectedResult3 = [undefined, 1, 1, 1, 1, 2, 2];

    expect(fill(arr, -1).toString()).toBe(expectedResult1.toString());
    expect(fill(arr, 0).toString()).toBe(expectedResult2.toString());
    expect(fill(arr, 1).toString()).toBe(expectedResult3.toString());
  });
});
