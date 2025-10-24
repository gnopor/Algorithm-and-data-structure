import main from "../index";

describe("Day 28: RegEx, Patterns, and Intro to Databases", () => {
  it("Should print an alphabetically-ordered list of first names for every user with a gmail account.", () => {
    console.log = jest.fn();
    const mockReadline = jest
      .fn()
      .mockReturnValueOnce("6")
      .mockReturnValueOnce("riya riya@gmail.com")
      .mockReturnValueOnce("julia julia@julia.me")
      .mockReturnValueOnce("julia sjulia@gmail.com")
      .mockReturnValueOnce("julia julia@gmail.com")
      .mockReturnValueOnce("samantha samantha@gmail.com")
      .mockReturnValueOnce("tanya tanya@gmail.com");

    const expectedResult1 = "julia";
    const expectedResult2 = "julia";
    const expectedResult3 = "riya";
    const expectedResult4 = "samantha";
    const expectedResult5 = "tanya";

    main(mockReadline);

    expect(console.log).toHaveBeenNthCalledWith(1, expectedResult1);
    expect(console.log).toHaveBeenNthCalledWith(2, expectedResult2);
    expect(console.log).toHaveBeenNthCalledWith(3, expectedResult3);
    expect(console.log).toHaveBeenNthCalledWith(4, expectedResult4);
    expect(console.log).toHaveBeenNthCalledWith(5, expectedResult5);
  });
});
