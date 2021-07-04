const staircase = require("../index.js");

describe("Staicase", () => {
  it("staircase with correct data", () => {
    expect(staircase(3)).toContain("###");
  });
});
