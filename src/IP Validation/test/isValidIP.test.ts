import { isValidIP } from "../index";

describe("IP Validation", () => {
  it("Should tell if the provided IP is valid.", () => {
    const tests = [
      {
        params: { str: "1.2.3.4" },
        output: true,
      },
      {
        params: { str: "1e0.1e1.1e2.2e2" },
        output: false,
      },
    ];

    for (let { params, output } of tests) {
      expect(isValidIP(params.str)).toBe(output);
    }
  });
});
