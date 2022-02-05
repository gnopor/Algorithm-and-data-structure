import lilysHomework from "../index";

describe("Lily's Homework", () => {
  it("Should return the minimun number of swaps needed to make the array beautiful according to the rules of hackerrank. ", () => {
    const arr1 = [7, 3, 0, 4, 1, 6, 5, 2];
    const expectedResult1 = 5;

    const arr2 = [3, 4, 2, 5, 1];
    const expectedResult2 = 2;

    expect(lilysHomework(arr1)).toBe(expectedResult1);
    expect(lilysHomework(arr2)).toBe(expectedResult2);
  });
});
