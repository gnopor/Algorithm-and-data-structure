import main from "../index";

describe("Day 12: Inheritance", () => {
  it("Should print the person and the person's score.", () => {
    console.log = jest.fn();
    const mockReadline = jest
      .fn()
      .mockReturnValueOnce("Heraldo Memelli 8135627")
      .mockReturnValueOnce("2")
      .mockReturnValueOnce("100 80");

    const expectedResult1 = "Name: Memelli, Heraldo\nID: 8135627";
    const expectedResult2 = "Grade: O";

    main(mockReadline);

    expect(console.log).toHaveBeenNthCalledWith(1, expectedResult1);
    expect(console.log).toHaveBeenNthCalledWith(2, expectedResult2);
  });
});
