import { calc } from "../index";

describe("Reverse polish notation calculator", () => {
  it("Should evaluates expressions in Reverse Polish notation", () => {
    const expr1 = "5 1 2 + 4 * + 3 -";
    const expr2 = "2 5 -";

    const expectedResult1 = 14;
    const expectedResult2 = -3;

    expect(calc(expr1)).toBe(expectedResult1);
    expect(calc(expr2)).toBe(expectedResult2);
  });
});
