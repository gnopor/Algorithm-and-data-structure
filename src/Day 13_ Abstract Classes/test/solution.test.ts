import main from "../index";

describe("Day 13: Abstract Classes", () => {
  it("Should print the description of the book.", () => {
    console.log = jest.fn();
    const mockReadline = jest
      .fn()
      .mockReturnValueOnce("The Alchemist")
      .mockReturnValueOnce("Paulo Coelho")
      .mockReturnValueOnce("248");

    const expectedResult1 = "Title: The Alchemist";
    const expectedResult2 = "Author: Paulo Coelho";
    const expectedResult3 = "Price: 248";

    main(mockReadline);

    expect(console.log).toHaveBeenNthCalledWith(1, expectedResult1);
    expect(console.log).toHaveBeenNthCalledWith(2, expectedResult2);
    expect(console.log).toHaveBeenNthCalledWith(3, expectedResult3);
  });
});
