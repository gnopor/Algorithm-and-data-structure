import twoArrays from "../index";

describe("Permutting Two Arrays", () => {
  it("Should return either YES or NO. YES if the two arrays are permutable and NO if not", () => {
    const k = 10;
    const A = [2, 1, 3];
    const B = [7, 8, 9];
    const expectedResult = "YES";

    expect(twoArrays(k, A, B)).toBe(expectedResult);
  });
});
