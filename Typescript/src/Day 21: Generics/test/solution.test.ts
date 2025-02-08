import main from "../index";

describe("Day 21: Generics", () => {
  it("Should print the generic arrays", () => {
    console.log = jest.fn();
    const mockReadline = jest
      .fn()
      .mockReturnValueOnce("4")
      .mockReturnValueOnce("4")
      .mockReturnValueOnce("7")
      .mockReturnValueOnce("8")
      .mockReturnValueOnce("9")
      .mockReturnValueOnce("2")
      .mockReturnValueOnce("tinto")
      .mockReturnValueOnce("shogun");

    const expectedResult1 = 4;
    const expectedResult2 = 7;
    const expectedResult3 = 8;
    const expectedResult4 = 9;
    const expectedResult5 = "tinto";
    const expectedResult6 = "shogun";

    main(mockReadline);

    expect(console.log).toHaveBeenNthCalledWith(1, expectedResult1);
    expect(console.log).toHaveBeenNthCalledWith(2, expectedResult2);
    expect(console.log).toHaveBeenNthCalledWith(3, expectedResult3);
    expect(console.log).toHaveBeenNthCalledWith(4, expectedResult4);
    expect(console.log).toHaveBeenNthCalledWith(5, expectedResult5);
    expect(console.log).toHaveBeenNthCalledWith(6, expectedResult6);
  });
});
