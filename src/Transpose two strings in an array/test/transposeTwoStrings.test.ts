import { transposeTwoStrings } from "../index";

describe("Transpose two strings in an array", () => {
  it("Should take the two strings in the array and transpose them so that the strings go from top to bottom instead of left to righ.", () => {
    const tests = [
      {
        params: { arr: ["Hello", "World"] },
        output: "H W\ne o\nl r\nl l\no d",
      },
      {
        params: { arr: ["a", "cat"] },
        output: "a c\n  a\n  t",
      },
      {
        params: { arr: ["takuma", ""] },
        output: "t  \na  \nk  \nu  \nm  \na  ",
      },
    ];

    for (let { params, output } of tests) {
      expect(transposeTwoStrings(params.arr)).toBe(output);
    }
  });
});
