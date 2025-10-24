import main from "../index";

describe("Day 10: Binary Numbers", () => {
  it("Should print the maximum number of consecutive 1s in the binary for of an integer.", () => {
    console.log = jest.fn();
    const mockReadline = jest.fn().mockReturnValueOnce("13");

    const expectedResult1 = 2;

    main(mockReadline);

    expect(console.log).toHaveBeenNthCalledWith(1, expectedResult1);
  });
});
