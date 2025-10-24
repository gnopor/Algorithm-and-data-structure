import main from "../index";

describe("Day 18: Queus and Stacks", () => {
  it("Should print a message saying if the string is a palindrome or not.", () => {
    console.log = jest.fn();
    const mockReadline = jest.fn().mockReturnValueOnce("racecar");

    const expectedResult1 = "The word, racecar, is a palindrome.";

    main(mockReadline);

    expect(console.log).toHaveBeenNthCalledWith(1, expectedResult1);
  });
});
