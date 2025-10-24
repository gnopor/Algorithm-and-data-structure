import { duplicateCount } from "../index";

describe("Counting Duplicates", () => {
  it("should return the count of distinct case-insensitive alphabetic characters and numeric digits.", () => {
    const text1 = "abcde";
    const text2 = "aA11";

    const expectedResult1 = 0;
    const expectedResult2 = 2;

    expect(duplicateCount(text1)).toBe(expectedResult1);
    expect(duplicateCount(text2)).toBe(expectedResult2);
  });
});
