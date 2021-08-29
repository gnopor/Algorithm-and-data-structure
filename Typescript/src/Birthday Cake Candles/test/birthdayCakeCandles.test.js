const birthdayCakeCandles = require("../index.js");

describe("Birthday Cake Candles", () => {
  it("Function should return the correct statement", () => {
    const arr = [3, 2, 1, 3];
    expect(birthdayCakeCandles(arr)).toBe(2);
  });
});
