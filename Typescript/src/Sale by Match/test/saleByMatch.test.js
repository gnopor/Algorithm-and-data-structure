const sockMerchant = require("../index.js");

describe("Sock Merchant", () => {
  it("Function should return an accurate number of pairs", () => {
    const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
    const n = arr.length;
    const expectedResult = 3;
    expect(sockMerchant(n, arr)).toBe(expectedResult);
  });
});
