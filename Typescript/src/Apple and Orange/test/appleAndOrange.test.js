const countApplesAndOranges = require("../index.js");

describe("Apple and Orange", () => {
  it("Count Apple and Orange with correct data", () => {
    console.log = jest.fn();

    countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
    // expected output: log 1 & 2
    expect(console.log).toHaveBeenLastCalledWith(2);
  });
});
