import main from "../index";

describe("Day 22: Binary Search Trees", () => {
  it("Should print the height of the tree", () => {
    console.log = jest.fn();
    const mockReadline = jest
      .fn()
      .mockReturnValueOnce("7")
      .mockReturnValueOnce("3")
      .mockReturnValueOnce("5")
      .mockReturnValueOnce("2")
      .mockReturnValueOnce("1")
      .mockReturnValueOnce("4")
      .mockReturnValueOnce("6")
      .mockReturnValueOnce("7");

    const expectedResult1 = 3;

    main(mockReadline);

    expect(console.log).toHaveBeenNthCalledWith(1, expectedResult1);
  });
});
