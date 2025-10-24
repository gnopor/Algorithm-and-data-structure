import quicksort from "../index";

describe("Quicksort 1", () => {
  it("should sort the arr based on the quicksort 1 principles", () => {
    const arr = [4, 5, 3, 7, 2];
    const expectedResult = [3, 2, 4, 5, 7];

    expect(quicksort(arr).toString()).toBe(expectedResult.toString());
  });
});
