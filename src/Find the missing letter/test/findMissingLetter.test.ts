import { findMissingLetter } from "../index";

describe("Find the missing letter", () => {
  it("Should return the the missing letter in the array.", () => {
    const tests = [
      { params: { array: ["a", "b", "c", "d", "f"] }, output: "e" },
      { params: { array: ["O", "Q", "R", "S"] }, output: "P" },
    ];

    for (let { params, output } of tests) {
      expect(findMissingLetter(params.array)).toBe(output);
    }
  });
});
