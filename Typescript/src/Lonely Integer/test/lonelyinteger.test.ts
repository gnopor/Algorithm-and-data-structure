import lonelyinteger from "../index";

describe("Lonely Integer", () => {
  it("Should return the lonely integer", () => {
    const a = [0, 0, 1, 2, 1];

    const expectedResult = 2;

    expect(lonelyinteger(a)).toBe(expectedResult);
  });
});
