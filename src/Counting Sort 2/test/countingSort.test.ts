import countingSort from "../index";

describe("Counting Sort 2", () => {
  it("Should use the counting sort method to sort an array of integer", () => {
    const arr = [1, 1, 3, 2, 1];
    const expectedResult = [1, 1, 1, 2, 3];

    expect(countingSort(arr).toString()).toBe(expectedResult.toString());
  });
});
