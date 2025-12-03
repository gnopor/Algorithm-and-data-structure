import findMedian from "../index";

describe("Find the median", () => {
  it("Must find the correct median of the arr of integer", () => {
    const arr = [5, 3, 1, 2, 4];
    const expectedResult = 3;

    expect(findMedian(arr)).toBe(expectedResult);
  });
});
