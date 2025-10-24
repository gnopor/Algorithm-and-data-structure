import isValid from "../index";

describe("Sherlock and the Valid String", () => {
  it("Should return 'YES' if the string is valid and 'NO' if not", () => {
    const s = "abcdefghhgfedecba";
    const expectedResult = "YES";

    expect(isValid(s)).toBe(expectedResult);
  });
});
