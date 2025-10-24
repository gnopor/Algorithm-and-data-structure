import minimumDistances from "../index";

describe("Minimum Distances", () => {
  it("Get the minimum distance between pairs of number indexes.", () => {
    const a = [7, 1, 3, 4, 1, 7];
    const expectedResult = 3;

    expect(minimumDistances(a)).toBe(expectedResult);
  });
});
