import maximumToys from "../index";

describe("Mark and Toys", () => {
  it("Should return the maximum number of toys.", () => {
    const prices = [1, 2, 3, 4];
    const k = 7;
    const expectedResult = 3;

    expect(maximumToys(prices, k)).toBe(expectedResult);
  });
});
