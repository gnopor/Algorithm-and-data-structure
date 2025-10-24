import main from "../index";

describe("Day 16: Exception - String to Integer", () => {
  it("Should print parse the input and handle the error", () => {
    console.log = jest.fn();
    const mockReadline = jest.fn().mockReturnValueOnce("za");
    const expectedResult1 = "Bad String";

    main(mockReadline);

    expect(console.log).toHaveBeenNthCalledWith(1, expectedResult1);
  });
});
