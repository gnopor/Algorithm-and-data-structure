import { freqSeq } from "../index";

describe("Frequence sequence", () => {
  it("Should properly return the translated string.", () => {
    const tests = [
      {
        params: { str: "hello world", sep: "-" },
        output: "1-1-3-3-2-1-1-2-1-3-1",
      },
      {
        params: { str: "19999999", sep: ":" },
        output: "1:7:7:7:7:7:7:7",
      },
      {
        params: { str: "^^^**$", sep: "x" },
        output: "3x3x3x2x2x1",
      },
    ];

    for (let { params, output } of tests) {
      expect(freqSeq(params.str, params.sep)).toBe(output);
    }
  });
});
