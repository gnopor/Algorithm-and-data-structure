import maximizingXor from "../index";

describe("Maximizing XOR", () => {
  it("Should return the maximal value of the xor operations for all permutations of the integers from l to r", () => {
    const l = 10;
    const r = 15;
    const expectedResult = 7;

    expect(maximizingXor(l, r)).toBe(expectedResult);
  });
});
