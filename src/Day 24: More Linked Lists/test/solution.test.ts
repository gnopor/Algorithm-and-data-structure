import main from "../index";

describe("Day 24: More Linked List", () => {
  it("Should print the linked list free of duplicates", () => {
    process.stdout.write = jest.fn();
    const mockReadline = jest
      .fn()
      .mockReturnValueOnce("6")
      .mockReturnValueOnce("1")
      .mockReturnValueOnce("2")
      .mockReturnValueOnce("2")
      .mockReturnValueOnce("3")
      .mockReturnValueOnce("3")
      .mockReturnValueOnce("4");

    const expectedResult1 = "1 ";
    const expectedResult2 = "2 ";
    const expectedResult3 = "3 ";
    const expectedResult4 = "4 ";

    main(mockReadline);

    expect(process.stdout.write).toHaveBeenNthCalledWith(1, expectedResult1);
    expect(process.stdout.write).toHaveBeenNthCalledWith(2, expectedResult2);
    expect(process.stdout.write).toHaveBeenNthCalledWith(3, expectedResult3);
    expect(process.stdout.write).toHaveBeenNthCalledWith(4, expectedResult4);
  });
});
