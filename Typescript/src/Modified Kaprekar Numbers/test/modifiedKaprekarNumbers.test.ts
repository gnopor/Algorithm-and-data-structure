import kaprekarNumbers from "../index";

describe("Taum and B'day", () => {
  it("Get the minimun cost of the birthday present.", () => {
    console.log = jest.fn();
    const p = 1;
    const q = 100;
    const expectedResult = "1 9 45 55 99";

    kaprekarNumbers(p, q);

    expect(console.log).toHaveBeenLastCalledWith(expectedResult);
  });
});
