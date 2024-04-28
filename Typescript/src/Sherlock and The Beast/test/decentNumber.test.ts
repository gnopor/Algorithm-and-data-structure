import decentNumber from "../index";

describe("Sherlock and The Beast", () => {
  it("Should print the decent number for the given length, or  if a decent number of that length cannot be formed.", () => {
    console.log = jest.fn();

    const n = 11;
    const expectedResult = "55555533333";

    decentNumber(n);
    expect(console.log).toHaveBeenLastCalledWith(expectedResult);
  });
});
