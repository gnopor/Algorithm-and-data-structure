import chocolateFeast from "../index";

describe("Chocolate Feast.", () => {
  it("Finds the number bars eaten during the promotion", () => {
    const n = 6;
    const c = 2;
    const m = 2;
    const expectedResult = 5;

    expect(chocolateFeast(n, c, m)).toBe(expectedResult);
  });
});
