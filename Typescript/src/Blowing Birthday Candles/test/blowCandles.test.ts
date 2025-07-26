import { blowCandles } from "../index";

describe("Blowing Birthday Candles", () => {
  it("Should return the number of blows you need to extinguish all the candles.", () => {
    const string1 = "2113";
    const string2 = "1321";
    const string3 = "0323456";

    const expectedResult1 = 5;
    const expectedResult2 = 3;
    const expectedResult3 = 9;

    expect(blowCandles(string1)).toBe(expectedResult1);
    expect(blowCandles(string2)).toBe(expectedResult2);
    expect(blowCandles(string3)).toBe(expectedResult3);
  });
});
