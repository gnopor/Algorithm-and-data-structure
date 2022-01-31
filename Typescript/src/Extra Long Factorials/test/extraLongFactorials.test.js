const extraLongFactorials = require("../index.js");

describe("Extra Long Factorials", () => {
  it("Function should print an accurate big integer", () => {
    console.log = jest.fn();
    const n = 25;
    const expectedResult = "15511210043330985984000000";
    extraLongFactorials(n);
    expect(console.log).toHaveBeenLastCalledWith(expectedResult);
  });
});
