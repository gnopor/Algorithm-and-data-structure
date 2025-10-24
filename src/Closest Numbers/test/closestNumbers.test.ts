import closestNumbers from "../index";

describe("Closest Numbers", () => {
  it("Function should return an array of closest numbers", () => {
    const arr = [
      -20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457,
      -6461594, 266854,
    ];
    const expectedResult = [-20, 30];

    expect(closestNumbers(arr).toString()).toBe(expectedResult.toString());
  });
});
