import absolutePermutation from "../index";

describe("Absolute Permutation", () => {
  it("Should return the correct the smallest permutations.", () => {
    const n = 4;
    const k = 2;
    const expectedResult = [3, 4, 1, 2];

    expect(absolutePermutation(n, k).toString()).toBe(
      expectedResult.toString()
    );
  });
});
