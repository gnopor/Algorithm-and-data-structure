import flippingBits from "../index";

describe("Flipping bits", () => {
  it("Should return the number the base 2 flipped number in base 10", () => {
    const n = 123456;
    const expectedResult = 4294843839;

    expect(flippingBits(n)).toBe(expectedResult);
  });
});
