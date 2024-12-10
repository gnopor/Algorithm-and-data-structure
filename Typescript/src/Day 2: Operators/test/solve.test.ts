import solve from "../index";

describe("Day 2: Operators", () => {
  it("Should print the correct total cost of the meal", () => {
    console.log = jest.fn();

    const mealCost = 12.0;
    const tipPercent = 20;
    const taxPercent = 8;
    const expectedResult = 15;

    solve(mealCost, tipPercent, taxPercent);

    expect(console.log).toHaveBeenNthCalledWith(1, expectedResult);
  });
});
