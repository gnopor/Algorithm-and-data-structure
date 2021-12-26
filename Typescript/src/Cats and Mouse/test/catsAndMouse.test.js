const catsAndMouse = require("../index.js");

describe("It discribe how Cats and Mouse function is doing.", () => {
  it("Check if mouse status is accurate", () => {
    const [x, y, z] = [1, 2, 3];
    const expectedResult = "Cat B";
    expect(catsAndMouse(x, y, z)).toBe(expectedResult);
  });
});
