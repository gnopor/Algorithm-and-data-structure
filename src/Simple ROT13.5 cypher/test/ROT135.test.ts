import { ROT135 } from "../index";

describe("Simple ROT13.5 cypher", () => {
  it("Should accepts a string and encrypts it", () => {
    const tests = [
      {
        params: { input: "The quick brown fox jumps over the 2 lazy dogs" },
        output: "Gur dhvpx oebja sbk whzcf bire gur 7 ynml qbtf",
      },
      {
        params: { input: "Gur dhvpx oebja sbk whzcf bire gur 7 ynml qbtf" },
        output: "The quick brown fox jumps over the 2 lazy dogs",
      },
    ];

    for (let { params, output } of tests) {
      expect(ROT135(params.input)).toBe(output);
    }
  });
});
