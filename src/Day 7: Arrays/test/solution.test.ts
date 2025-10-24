import main from "../index";

describe("Day 7: Array", () => {
  it("Should print the input array's item in reverse order separated each by a single space.", () => {
    console.log = jest.fn();
    const mockReadline = jest
      .fn()
      .mockReturnValueOnce("4")
      .mockReturnValueOnce("1 2 3 4");

    const expectedResult1 = "4 3 2 1";

    main(mockReadline);

    expect(console.log).toHaveBeenNthCalledWith(1, expectedResult1);
  });
});
