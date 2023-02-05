import squares from "../index";

describe("Sherlock Squares", () => {
  it("Should return the right number of square integers.", () => {
    const a = 3;
    const b = 9;
    const expectedOutput1 = 2;

    expect(squares(a, b)).toBe(expectedOutput1);
  });
});
