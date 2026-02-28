import { getMiddle } from "../index";

describe("Get the Middle Character", () => {
  it("Should return the character(s) in the middle.", () => {
    const tests = [
      {
        params: { s: "testing" },
        output: "t",
      },
      {
        params: { s: "middle" },
        output: "dd",
      },
    ];

    for (let { params, output } of tests) {
      expect(getMiddle(params.s)).toBe(output);
    }
  });
});
