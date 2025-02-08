import main from "../index";

describe("Day 23: BST Level-Order Traversal", () => {
  it("Should print the value of each node in the tree's level-order traversal", () => {
    process.stdout.write = jest.fn();
    const mockReadline = jest
      .fn()
      .mockReturnValueOnce("6")
      .mockReturnValueOnce("3")
      .mockReturnValueOnce("5")
      .mockReturnValueOnce("4")
      .mockReturnValueOnce("7")
      .mockReturnValueOnce("2")
      .mockReturnValueOnce("1");

    const expectedResult1 = "3 ";
    const expectedResult2 = "2 ";
    const expectedResult3 = "5 ";
    const expectedResult4 = "1 ";
    const expectedResult5 = "4 ";
    const expectedResult6 = "7 ";

    main(mockReadline);

    expect(process.stdout.write).toHaveBeenNthCalledWith(1, expectedResult1);
    expect(process.stdout.write).toHaveBeenNthCalledWith(2, expectedResult2);
    expect(process.stdout.write).toHaveBeenNthCalledWith(3, expectedResult3);
    expect(process.stdout.write).toHaveBeenNthCalledWith(4, expectedResult4);
    expect(process.stdout.write).toHaveBeenNthCalledWith(5, expectedResult5);
    expect(process.stdout.write).toHaveBeenNthCalledWith(6, expectedResult6);
  });
});
