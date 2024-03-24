import beautifulPairs from "../index";

describe("Beautiful Pairs", () => {
  it("Should return the maximum possible number of pairwise disjoint beautiful pairs ", () => {
    const A = [3, 5, 7, 11, 5, 8];
    const B = [5, 7, 11, 10, 5, 8];
    const expectedResult = 6;

    expect(beautifulPairs(A, B)).toBe(expectedResult);
  });
});
