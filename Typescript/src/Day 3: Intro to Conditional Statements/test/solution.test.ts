import main from "../index";

describe("Day 3: Intro to Conditional Statements", () => {
  it("Should print the correct tell whether or not the input is weird", () => {
    console.log = jest.fn();
    const mockReadline = jest.fn().mockReturnValueOnce("24");

    const expectedResult1 = "Not Weird";

    main(mockReadline);

    expect(console.log).toHaveBeenNthCalledWith(1, expectedResult1);
  });
});
