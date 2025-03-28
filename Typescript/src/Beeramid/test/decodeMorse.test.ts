import beeramid from "../index";

describe("Beeramid", () => {
  it("Should the maximum number of level.", () => {
    const bonus = 5000;
    const price = 3;
    const expectedResult = 16;

    expect(beeramid(bonus, price)).toBe(expectedResult);
  });
});
