import { persistence } from "../index";

describe("Persistent Bugger", () => {
  it("Should return its multiplicative persistence.", () => {
    const tests = [
      {
        params: { num: 39 },
        output: 3,
      },
      {
        params: { num: 999 },
        output: 4,
      },
      {
        params: { num: 4 },
        output: 0,
      },
    ];

    for (let { params, output } of tests) {
      expect(persistence(params.num)).toBe(output);
    }
  });
});
