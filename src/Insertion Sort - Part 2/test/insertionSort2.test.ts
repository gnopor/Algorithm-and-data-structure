import insertionSort2 from "../index";

describe("Insertion Sort - Part 2", () => {
  it("Finds the right order of the array", () => {
    console.log = jest.fn();

    const arr = [1, 4, 3, 5, 6, 2];
    const n = arr.length;
    const expectedResult = "1 2 3 4 5 6";

    insertionSort2(n, arr);

    expect(console.log).toHaveBeenLastCalledWith(expectedResult);
  });
});
