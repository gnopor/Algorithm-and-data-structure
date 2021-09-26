const kangaroo = require("../index.js");

describe("Number Line Jumps", () => {
  it("Check if kangoroo will meet at some point", () => {
    expect(kangaroo(0, 3, 5, 4)).toBe("NO");
    expect(kangaroo(2, 1, 1, 2)).toBe("YES");
  });
});
