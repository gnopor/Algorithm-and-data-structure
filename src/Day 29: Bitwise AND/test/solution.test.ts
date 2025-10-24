import main from "../index";

describe("Day 29: Bitwise AND", () => {
  it("Should print the maximum value of A&B within the limit.", () => {
    console.log = jest.fn();
    const mockReadline = jest
      .fn()
      .mockReturnValueOnce("3")
      .mockReturnValueOnce("5 2")
      .mockReturnValueOnce("8 5")
      .mockReturnValueOnce("2 2");

    const expectedResult1 = 1;
    const expectedResult2 = 4;
    const expectedResult3 = 0;

    main(mockReadline);

    expect(console.log).toHaveBeenNthCalledWith(1, expectedResult1);
    expect(console.log).toHaveBeenNthCalledWith(2, expectedResult2);
    expect(console.log).toHaveBeenNthCalledWith(3, expectedResult3);
  });
});
