import { countLettersAndDigits } from "../index";

describe("Help Bob count letters and digits", () => {
  it("Should return the number of letters and digits.", () => {
    const tests = [
      { params: { input: "hel2!lo" }, output: 6 },
      {
        params: { input: "12345f%%%t5t&/6" },
        output: 10,
      },
    ];

    for (let { params, output } of tests) {
      expect(countLettersAndDigits(params.input).toString()).toBe(
        output.toString(),
      );
    }
  });
});
