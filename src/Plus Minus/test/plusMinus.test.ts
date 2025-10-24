import plusMinus from "../index";

describe("Plus Minus", () => {
  it("Function should print the correct statement", () => {
    console.log = jest.fn();
    const arr = [-4, 3, -9, 0, 4, 1];
    plusMinus(arr);

    // 0.500000;
    // 0.333333;
    // 0.166666;

    expect(console.log).toHaveBeenLastCalledWith("0.166666");
  });
});
