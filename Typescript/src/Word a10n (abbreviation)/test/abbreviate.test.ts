import { abbreviate } from "../index";

describe("Word a10n (abbreviation)", () => {
  it("should return abbreviated version of the string", () => {
    const str1 = "elephant-rides are really fun!";
    const str2 = "internationalization";
    const expectedResult1 = "e6t-r3s are r4y fun!";
    const expectedResult2 = "i18n";

    expect(abbreviate(str1)).toBe(expectedResult1);
    expect(abbreviate(str2)).toBe(expectedResult2);
  });
});
