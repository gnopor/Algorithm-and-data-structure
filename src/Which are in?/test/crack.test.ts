import { inArray } from "../index";

describe("Which arein?", () => {
  it("Should return a sorted array of the strings of a1 which are substrings of strings of a2.", () => {
    const tests = [
      {
        params: {
          a1: ["arp", "live", "strong"],
          a2: ["lively", "alive", "harp", "sharp", "armstrong"],
        },
        output: ["arp", "live", "strong"],
      },
      {
        params: {
          a1: ["tarp", "mice", "bull"],
          a2: ["lively", "alive", "harp", "sharp", "armstrong"],
        },
        output: [],
      },
    ];

    for (let { params, output } of tests) {
      expect(inArray(params.a1, params.a2).toString()).toBe(output.toString());
    }
  });
});
