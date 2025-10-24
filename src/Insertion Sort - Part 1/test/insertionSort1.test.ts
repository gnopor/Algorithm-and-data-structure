import insertionSort1 from "../index";

describe("Insertion Sort - Part 1", () => {
  it("Finds the right order of the array", () => {
    console.log = jest.fn();

    const arr = [2, 4, 6, 8, 3];
    const n = arr.length;
    const expectedResult = "2 3 4 6 8";

    insertionSort1(n, arr);

    expect(console.log).toHaveBeenLastCalledWith(expectedResult);
  });
});
