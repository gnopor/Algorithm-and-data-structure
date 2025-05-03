import { decompose } from "../index";

describe("Square Into Squares. Protect trees!", () => {
  it("Should return an array of squares", () => {
    const n1 = 11;
    const n2 = 50;

    const expectedResult1 = [1, 2, 4, 10];
    const expectedResult2 = [1, 3, 5, 8, 49];

    expect(decompose(n1)?.toString()).toBe(expectedResult1.toString());
    expect(decompose(n2)?.toString()).toBe(expectedResult2.toString());
  });
});
