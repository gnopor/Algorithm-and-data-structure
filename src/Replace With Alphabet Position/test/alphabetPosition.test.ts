import { alphabetPosition } from "../index";

describe("Replace With Alphabet Position", () => {
  it("Should replace each character with its position in the alphabet", () => {
    const text1 = "The sunset sets at twelve o' clock.";
    const text2 = "The narwhal bacons at midnight.";

    const expectedResult1 =
      "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11";
    const expectedResult2 =
      "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20";

    expect(alphabetPosition(text1)).toBe(expectedResult1);
    expect(alphabetPosition(text2)).toBe(expectedResult2);
  });
});
