import { cleanString } from "../index";

describe("Backspace in string", () => {
  it("Should return the processed string.", () => {
    const tests = [
      {
        params: { s: "abc#d##c" },
        output: "ac",
      },
      {
        params: { s: "abc##d######" },
        output: "",
      },
    ];

    for (let { params, output } of tests) {
      expect(cleanString(params.s)).toBe(output);
    }
  });
});
