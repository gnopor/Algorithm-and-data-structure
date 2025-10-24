import stringConstruction from "../index";

describe("String Construction", () => {
  it("Should return the cost of constructing a new string", () => {
    const s = "abcabc";
    const expectedResult = 3;

    expect(stringConstruction(s)).toBe(expectedResult);
  });
});
