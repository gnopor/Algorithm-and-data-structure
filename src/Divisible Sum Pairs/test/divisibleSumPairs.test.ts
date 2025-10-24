import divisibleSumPairs from "../index";

describe("Divisible Sum Pairs", () => {
  it("test divisible sum pairs with correct data", () => {
    const n = 6;
    const k = 3;
    const arr = [1, 3, 2, 6, 1, 2];
    const expected_result = 5;
    expect(divisibleSumPairs(n, k, arr)).toBe(expected_result);
  });
});
