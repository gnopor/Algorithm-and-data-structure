import main from "../index";

describe("Day 26: Nested Logic", () => {
  it("Should print accurate fees", () => {
    console.log = jest.fn();
    const mockReadline = jest
      .fn()
      .mockReturnValueOnce("16 6 2024")
      .mockReturnValueOnce("6 6 2024");

    const expectedResult1 = 150;

    main(mockReadline);

    expect(console.log).toHaveBeenNthCalledWith(1, expectedResult1);
  });
});
