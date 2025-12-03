import main from "../index";

describe("Day 15: Linked List", () => {
  it("Should print the elements of the linked list.", () => {
    process.stdout.write = jest.fn();
    const mockReadline = jest
      .fn()
      .mockReturnValueOnce("4")
      .mockReturnValueOnce("2")
      .mockReturnValueOnce("3")
      .mockReturnValueOnce("4")
      .mockReturnValueOnce("1");

    const expectedResult1 = "2 ";
    const expectedResult2 = "3 ";
    const expectedResult3 = "4 ";
    const expectedResult4 = "1 ";

    main(mockReadline);

    expect(process.stdout.write).toHaveBeenNthCalledWith(1, expectedResult1);
    expect(process.stdout.write).toHaveBeenNthCalledWith(2, expectedResult2);
    expect(process.stdout.write).toHaveBeenNthCalledWith(3, expectedResult3);
    expect(process.stdout.write).toHaveBeenNthCalledWith(4, expectedResult4);
  });
});
