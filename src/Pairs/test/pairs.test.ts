import pair from "../index";

describe("Pair", () => {
  it("Should return the correct number of pairs.", () => {
    const k = 2;
    const arr = [1, 5, 3, 4, 2];
    const expectedResult = 3;
    expect(pair(k, arr)).toBe(expectedResult);
  });
});
