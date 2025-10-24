import toys from "../index";

describe("Priyanka and Toys", () => {
  it("Should return the integer value of the number of containers Priyanka must contract to ship all of the toys", () => {
    const w = [1, 2, 3, 21, 7, 12, 14, 21];
    const expectedResult = 4;

    expect(toys(w)).toBe(expectedResult);
  });
});
