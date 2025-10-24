import timeInWords from "../index";

describe("timeInWords", () => {
  it("Should return the correct numbers to string convertion", () => {
    const h = 7;
    const m = 15;
    const expectedResult = "quarter past seven";

    expect(timeInWords(h, m)).toBe(expectedResult);
  });
});
