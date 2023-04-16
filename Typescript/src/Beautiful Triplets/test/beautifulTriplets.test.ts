import beautifulTriplets from "../index";

describe("Beautiful Triplets", () => {
  it("Should find the right number of triplets", () => {
    const d = 3;
    const arr = [1, 2, 4, 5, 7, 8, 10];
    const expectedResult = 3;

    expect(beautifulTriplets(d, arr)).toBe(expectedResult);
  });
});
