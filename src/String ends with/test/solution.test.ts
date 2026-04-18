import { solution } from "../index";

describe("String ends with?", () => {
  it("Should return the true if the first argument ends with the second, false if not.", () => {
    const tests = [
      { params: { str: "abc", ending: "bc" }, output: true },
      { params: { str: "abc", ending: "d" }, output: false },
    ];

    for (let { params, output } of tests) {
      expect(solution(params.str, params.ending)).toBe(output);
    }
  });
});
