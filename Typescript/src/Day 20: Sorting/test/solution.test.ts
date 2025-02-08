import main from "../index";

describe("Day 20: Sorting", () => {
  it("Should print the description of the sorted array.", () => {
    console.log = jest.fn();
    const mockReadline = jest
      .fn()
      .mockReturnValueOnce("4")
      .mockReturnValueOnce("4 3 1 2");

    const expectedResult1 = "Array is sorted in 5 swaps.";
    const expectedResult2 = "First Element: 1";
    const expectedResult3 = "Last Element: 4";

    main(mockReadline);

    expect(console.log).toHaveBeenNthCalledWith(1, expectedResult1);
    expect(console.log).toHaveBeenNthCalledWith(2, expectedResult2);
    expect(console.log).toHaveBeenNthCalledWith(3, expectedResult3);
  });
});
