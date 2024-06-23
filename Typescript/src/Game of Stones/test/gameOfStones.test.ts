import gameOfStones from "../index";

describe("Game of Stones", () => {
  it('Should return "Fist" if the first player is the winner or "Second" otherwise', () => {
    const n = 10;
    const expectedResult = "First";

    expect(gameOfStones(n)).toBe(expectedResult);
  });
});
