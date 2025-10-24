import marcsCakewalk from "../index";

describe("Marc's Cakewalk", () => {
  it("Should return the minimum number of miles to walk to maintain weight", () => {
    const calorie = [7, 4, 9, 6];
    const expectedResult = 79;

    expect(marcsCakewalk(calorie)).toBe(expectedResult);
  });
});
