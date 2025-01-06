import main from "../index";

describe("Day 6: Let's Review", () => {
  it("Should print input strings characters grouped by even-indexed and odd-indexed.", () => {
    console.log = jest.fn();
    const mockReadline = jest
      .fn()
      .mockReturnValueOnce("3")
      .mockReturnValueOnce("Hacker")
      .mockReturnValueOnce("Rank")
      .mockReturnValueOnce("adbecf");

    const expectedResult1 = "Hce akr";
    const expectedResult2 = "Rn ak";
    const expectedResult3 = "abc def";

    main(mockReadline);

    expect(console.log).toHaveBeenNthCalledWith(1, expectedResult1);
    expect(console.log).toHaveBeenNthCalledWith(2, expectedResult2);
    expect(console.log).toHaveBeenNthCalledWith(3, expectedResult3);
  });
});
