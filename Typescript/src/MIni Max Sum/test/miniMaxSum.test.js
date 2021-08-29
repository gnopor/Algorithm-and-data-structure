const miniMaxSum = require("../index.js");

describe("Plus Minus", () => {
  it("Function should print the correct statement", () => {
    console.log = jest.fn();
    const arr = [0, 5, 4, 3, 2, 1];
    miniMaxSum(arr);
    expect(console.log).toHaveBeenCalledWith(10, 15);
  });
});
