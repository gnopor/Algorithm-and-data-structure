import main from "../index";

describe("Day 4: Class vs. Instance", () => {
  it("Should print person's status the right number of times.", () => {
    console.log = jest.fn();
    const mockReadline = jest
      .fn()
      .mockReturnValueOnce("2")
      .mockReturnValueOnce("-4")
      .mockReturnValueOnce("16");

    const expectedResult1 = "Age is not valid, setting age to 0.";
    const expectedResult2 = "You are young.";
    const expectedResult3 = "You are young.";
    const expectedResult4 = "You are a teenager.";
    const expectedResult5 = "You are old.";

    main(mockReadline);

    expect(console.log).toHaveBeenNthCalledWith(1, expectedResult1);
    expect(console.log).toHaveBeenNthCalledWith(2, expectedResult2);
    expect(console.log).toHaveBeenNthCalledWith(3, expectedResult3);
    expect(console.log).toHaveBeenNthCalledWith(4, "");
    expect(console.log).toHaveBeenNthCalledWith(5, expectedResult4);
    expect(console.log).toHaveBeenNthCalledWith(6, expectedResult5);
  });
});
