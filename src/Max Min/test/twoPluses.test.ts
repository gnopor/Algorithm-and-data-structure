import maxMin from "../index";

describe("Max Mix", () => {
  it("Should return the minimum possible unfairness", () => {
    const k = 5;
    const arr = [
      4504, 1520, 5857, 4094, 4157, 3902, 822, 6643, 2422, 7288, 8245, 9948,
      2822, 1784, 7802, 3142, 9739, 5629, 5413, 7232,
    ];
    const expectedResult = 1335;

    expect(maxMin(k, arr)).toBe(expectedResult);
  });
});
