import { finance } from "../index";

describe("Finance Plan on Planet XY140Z-n", () => {
  it("Should return the sum of savings", () => {
    const n1 = 7;
    const n2 = 5000;

    const expectedResult1 = 252;
    const expectedResult2 = 62537505000;

    expect(finance(n1)).toBe(expectedResult1);
    expect(finance(n2)).toBe(expectedResult2);
  });
});
