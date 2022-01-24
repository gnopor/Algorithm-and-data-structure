const dayOfProgrammer = require("../index.js");

describe("Is the migratory bird result accurate", () => {
  it("Check if kangoroo will meet at some point", () => {
    const params = 1918;
    const expected_result = "26.09.1918";
    expect(dayOfProgrammer(params)).toBe(expected_result);
  });
});
