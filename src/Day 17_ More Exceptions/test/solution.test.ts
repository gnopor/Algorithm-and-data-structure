import main from "../index";

describe("Day 17: More Exceptions", () => {
  it("Should print the power of the 2 elements on each line or an error message when either of those elements are negative", () => {
    console.log = jest.fn();
    const mockReadline = jest
      .fn()
      .mockReturnValueOnce("4")
      .mockReturnValueOnce("3 5")
      .mockReturnValueOnce("2 4")
      .mockReturnValueOnce("-1 -2")
      .mockReturnValueOnce("-1 3");

    const expectedResult1 = 243;
    const expectedResult2 = 16;
    const expectedResult3 = "n and p should be non-negative";
    const expectedResult4 = "n and p should be non-negative";

    main(mockReadline);

    expect(console.log).toHaveBeenNthCalledWith(1, expectedResult1);
    expect(console.log).toHaveBeenNthCalledWith(2, expectedResult2);
    expect(console.log).toHaveBeenNthCalledWith(3, expectedResult3);
    expect(console.log).toHaveBeenNthCalledWith(4, expectedResult4);
  });
});
