import main from "../index";

describe("Day 10: 2D Arrays", () => {
  it("Should print the maximum sum of hourglass elements.", () => {
    console.log = jest.fn();
    const mockReadline = jest
      .fn()
      .mockReturnValueOnce("-1 -1 0 -9 -2 -2")
      .mockReturnValueOnce("-2 -1 -6 -8 -2 -5")
      .mockReturnValueOnce("-1 -1 -1 -2 -3 -4")
      .mockReturnValueOnce("-1 -9 -2 -4 -4 -5")
      .mockReturnValueOnce("-7 -3 -3 -2 -9 -9")
      .mockReturnValueOnce("-1 -3 -1 -2 -4 -5");

    const expectedResult1 = -6;

    main(mockReadline);

    expect(console.log).toHaveBeenNthCalledWith(1, expectedResult1);
  });
});
