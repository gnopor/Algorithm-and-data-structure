import fairRations from "../index";

describe("Fair Rations", () => {
  it("Finds out the number of loaves that should be distributed for everyone to have an even number of loaf", () => {
    const B = [4, 5, 6, 7];
    const expectedResult = 4;

    expect(fairRations(B)).toBe(expectedResult.toString());
  });
});
