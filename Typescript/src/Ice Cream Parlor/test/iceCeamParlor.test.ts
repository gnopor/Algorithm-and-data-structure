import icecreamParlor from "../index";

describe("Ice Cream Parlor", () => {
  it("Should return the correct pair.", () => {
    const m = 9;
    const arr = [1, 3, 4, 6, 7, 9];
    const expectedResult = [2, 4];
    expect(icecreamParlor(m, arr).toString()).toBe(expectedResult.toString());
  });
});
