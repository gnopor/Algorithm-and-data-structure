import { maxLengthDifference } from "../index";

describe("Maximum Length Difference", () => {
  it("Should find the maximum length difference between the items of the 2 arrays.", () => {
    const tests = [
      {
        params: {
          a1: [
            "hoqq",
            "bbllkw",
            "oox",
            "ejjuyyy",
            "plmiis",
            "xxxzgpsssa",
            "xxwwkktt",
            "znnnnfqknaz",
            "qqquuhii",
            "dvvvwz",
          ],
          a2: ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"],
        },
        output: 13,
      },
    ];

    for (let { params, output } of tests) {
      expect(maxLengthDifference(params.a1, params.a2)).toBe(output);
    }
  });
});
