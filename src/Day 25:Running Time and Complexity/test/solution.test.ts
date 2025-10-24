import main from "../index";

describe("Day 25: Running Time and Complexity", () => {
  it("Should print weither or not each input is a prime number", () => {
    console.log = jest.fn();
    const mockReadline = jest
      .fn()
      .mockReturnValueOnce("3")
      .mockReturnValueOnce("12")
      .mockReturnValueOnce("5")
      .mockReturnValueOnce("7");

    const expectedResult1 = "Not prime";
    const expectedResult2 = "Prime";
    const expectedResult3 = "Prime";

    main(mockReadline);

    expect(console.log).toHaveBeenNthCalledWith(1, expectedResult1);
    expect(console.log).toHaveBeenNthCalledWith(2, expectedResult2);
    expect(console.log).toHaveBeenNthCalledWith(3, expectedResult3);
  });
});
