import main from "../index";

describe("Day 5: Loops", () => {
  it("Should print the first 10 dividers of the entered number.", () => {
    console.log = jest.fn();
    const mockReadline = jest.fn().mockReturnValueOnce("2");

    const expectedResult1 = "2 x 1 = 2";
    const expectedResult10 = "2 x 10 = 20";

    main(mockReadline);

    expect(console.log).toHaveBeenNthCalledWith(1, expectedResult1);
    expect(console.log).toHaveBeenNthCalledWith(10, expectedResult10);
  });
});
