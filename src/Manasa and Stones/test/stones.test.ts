import stones from "../index";

describe("Stones", () => {
  it("Finds the right possible values", () => {
    const n = 4;
    const a = 10;
    const b = 100;
    const expectedResult = [30, 120, 210, 300];

    expect(stones(n, a, b).toString()).toBe(expectedResult.toString());
  });
});
