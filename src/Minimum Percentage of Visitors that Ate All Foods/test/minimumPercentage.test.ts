import { minimumPercentage } from "../index";

describe("Minimum Percentage of Visitors that Ate all Foods", () => {
  it("Should return the minimum percentage of people how tried all the foods", () => {
    const foods1 = [65, 80, 80, 90];
    const foods2 = [83, 86, 88];
    const foods3 = [100, 85, 82, 71, 57];

    const expectedResult1 = 15;
    const expectedResult2 = 57;
    const expectedResult3 = 0;

    expect(minimumPercentage(foods1)).toBe(expectedResult1);
    expect(minimumPercentage(foods2)).toBe(expectedResult2);
    expect(minimumPercentage(foods3)).toBe(expectedResult3);
  });
});
