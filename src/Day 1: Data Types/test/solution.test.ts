import main from "../index";

describe("Day 1: Data Types", () => {
  it("Should print the correct sums and concatenations", () => {
    console.log = jest.fn();
    const mockReadline = jest
      .fn()
      .mockReturnValueOnce("10")
      .mockReturnValueOnce("100.1")
      .mockReturnValueOnce("and Jest are quite something");

    const expectedResult1 = 14;
    const expectedResult2 = "104.1";
    const expectedResult3 = "HackerRank and Jest are quite something";

    main(mockReadline);

    expect(console.log).toHaveBeenNthCalledWith(1, expectedResult1);
    expect(console.log).toHaveBeenNthCalledWith(2, expectedResult2);
    expect(console.log).toHaveBeenNthCalledWith(3, expectedResult3);
  });
});
