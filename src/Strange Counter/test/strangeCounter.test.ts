import strangeCounter from "../index";

describe("Strange Counter", () => {
  it("Finds the right value at the specified time", () => {
    const t = 21;
    const expectedResult = 1;

    expect(strangeCounter(t)).toBe(expectedResult);
  });
});
