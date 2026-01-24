import { duplicateEncode } from "../index";

describe("Duplicate Encoder", () => {
  it("Should convert the string to its encoded version made of only ')' and '(' characters.", () => {
    const tests = [
      {
        params: {
          word: "Success",
        },
        output: ")())())",
      },
      {
        params: {
          word: "(( @",
        },
        output: "))((",
      },
    ];

    for (let { params, output } of tests) {
      expect(duplicateEncode(params.word).toString()).toBe(output.toString());
    }
  });
});
