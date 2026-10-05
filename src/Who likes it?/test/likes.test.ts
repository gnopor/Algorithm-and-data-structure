import { likes } from "../index";

describe("Who likes it?", () => {
  it("Should properly display the the names of those who like an item.", () => {
    const tests = [
      {
        params: { a: [] },
        output: "no one likes this",
      },
      {
        params: { a: ["Peter"] },
        output: "Peter likes this",
      },
      {
        params: { a: ["Jacob", "Alex"] },
        output: "Jacob and Alex like this",
      },
      {
        params: { a: ["Max", "John", "Mark"] },
        output: "Max, John and Mark like this",
      },
      {
        params: { a: ["Alex", "Jacob", "Mark", "Max"] },
        output: "Alex, Jacob and 2 others like this",
      },
    ];

    for (let { params, output } of tests) {
      expect(likes(params.a)).toBe(output);
    }
  });
});
