import bigSorting from "../index";

describe("Big Sorting", () => {
  it("Function should return the sorted array of string", () => {
    const unsorted = [
      "31415926535897932384626433832795",
      "1",
      "10",
      "3",
      "5",
      "3",
    ];
    const expectedResult = [
      "1",
      "3",
      "3",
      "5",
      "10",
      "31415926535897932384626433832795",
    ];

    expect(bigSorting(unsorted).toString()).toBe(expectedResult.toString());
  });
});
