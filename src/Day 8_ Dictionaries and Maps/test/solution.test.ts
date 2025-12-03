import main from "../index";

describe("Day 8: Dictionnaries and Maps", () => {
  it("Should create the phonebook and accurately query it.", () => {
    console.log = jest.fn();
    const mockReadline = jest
      .fn()
      .mockReturnValueOnce("2")
      .mockReturnValueOnce("mola 333")
      .mockReturnValueOnce("tinto 222")
      .mockReturnValueOnce("mola")
      .mockReturnValueOnce("tinto")
      .mockReturnValueOnce("gnop");

    const expectedResult1 = "mola=333";
    const expectedResult2 = "tinto=222";
    const expectedResult3 = "Not found";

    main(mockReadline);

    expect(console.log).toHaveBeenNthCalledWith(1, expectedResult1);
    expect(console.log).toHaveBeenNthCalledWith(2, expectedResult2);
    expect(console.log).toHaveBeenNthCalledWith(3, expectedResult3);
  });
});
