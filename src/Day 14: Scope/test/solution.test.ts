import main from "../index";

describe("Day 14: Scope", () => {
  it("Should print the maximum diffenrence from the elements array.", () => {
    console.log = jest.fn();
    const mockReadline = jest
      .fn()
      .mockReturnValueOnce("3")
      .mockReturnValueOnce("2 4 8");

    const expectedResult1 = 6;

    main(mockReadline);

    expect(console.log).toHaveBeenNthCalledWith(1, expectedResult1);
  });
});
