import { isInteresting } from "../index";

describe("Square Into Squares. Protect trees!", () => {
  it("Should return an integer(0, 1, or 2) stating how interesting the number is.", () => {
    const n1 = 98;
    const awesomePhrases1: number[] = [];

    const n2 = 11211;
    const awesomePhrases2: number[] = [11211, 323];

    const expectedResult1 = 1;
    const expectedResult2 = 2;

    expect(isInteresting(n1, awesomePhrases1)).toBe(expectedResult1);
    expect(isInteresting(n2, awesomePhrases2)).toBe(expectedResult2);
  });
});
