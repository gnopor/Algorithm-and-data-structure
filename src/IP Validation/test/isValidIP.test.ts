import { isValidIP } from "../index";

describe("IP Validation", () => {
  it("Should tell if the provided IP is valid.", () => {
    const tests = [
      {
        inputs: { str: "1.2.3.4" },
        output: true,
      },
      {
        inputs: { str: "1e0.1e1.1e2.2e2" },
        output: false,
      },
    ];

    for (let { inputs, output } of tests) {
      expect(isValidIP(inputs.str)).toBe(output);
    }
  });
});
