import { stat } from "../index";

describe("Statistics for an Athletic Association", () => {
  it("Should accept a list of running data and return the computed stat(range, average, and median).", () => {
    const tests = [
      {
        params: { input: "01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17" },
        output: "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34",
      },
      {
        params: {
          input:
            "02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41",
        },
        output: "Range: 00|31|17 Average: 02|26|18 Median: 02|22|00",
      },
      {
        params: {
          input: "02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17",
        },
        output: "Range: 00|31|17 Average: 02|27|10 Median: 02|24|57",
      },
    ];

    for (let { params, output } of tests) {
      expect(stat(params.input)).toBe(output);
    }
  });
});
