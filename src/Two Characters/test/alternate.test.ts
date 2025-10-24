import alternate from "../index";

describe("Two Characters", () => {
  it("Should return the length of the longest alternate possible", () => {
    const s = "beabeefeab";
    const expectedResult = 5;

    expect(alternate(s)).toBe(expectedResult);
  });
});
