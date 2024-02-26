import balancedSums from "../index";

describe("Sherlock and Array", () => {
  it("Returns 'YES' if two subarrays that sum to the same values are found, and 'NO' if not", () => {
    const arr1 = [5, 6, 8, 11];
    const expectedResult1 = "YES";

    const arr2 = [1, 2, 3];
    const expectedResult2 = "NO";

    expect(balancedSums(arr1)).toBe(expectedResult1);
    expect(balancedSums(arr2)).toBe(expectedResult2);
  });
});
