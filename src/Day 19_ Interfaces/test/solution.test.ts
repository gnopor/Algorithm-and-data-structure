import main from "../index";

describe("Day 19: Interfaces", () => {
  it("Should print the sum of the divisors.", () => {
    console.log = jest.fn();
    const mockReadline = jest
      .fn()
      .mockReturnValueOnce("6")
      .mockReturnValueOnce("2")
      .mockReturnValueOnce("3")
      .mockReturnValueOnce("4")
      .mockReturnValueOnce("1");

    const expectedResult1 = "I implemented: AdvancedArithmetic\n12";

    main(mockReadline);

    expect(console.log).toHaveBeenNthCalledWith(1, expectedResult1);
  });
});
