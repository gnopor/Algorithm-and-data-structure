const pickingNumbers = require("../index.js");

describe("Plus Minus", () => {
  it("Function should print the correct statement", () => {
    console.log = jest.fn();
    const arr = [
      4, 2, 3, 4, 4, 9, 98, 98, 3, 3, 3, 4, 2, 98, 1, 98, 98, 1, 1, 4, 98, 2,
      98, 3, 9, 9, 3, 1, 4, 1, 98, 9, 9, 2, 9, 4, 2, 2, 9, 98, 4, 98, 1, 3, 4,
      9, 1, 98, 98, 4, 2, 3, 98, 98, 1, 99, 9, 98, 98, 3, 98, 98, 4, 98, 2, 98,
      4, 2, 1, 1, 9, 2, 4,
    ];

    expect(pickingNumbers(arr)).toBe(22);
  });
});
