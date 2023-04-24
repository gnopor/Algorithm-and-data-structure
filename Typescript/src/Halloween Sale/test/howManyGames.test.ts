import howManyGames from "../index";

describe("Halloween Sale.", () => {
  it("Finds how many games can be bought during halloween", () => {
    const p = 20;
    const d = 3;
    const m = 6;
    const s = 85;
    const expectedResult = 7;

    expect(howManyGames(p, d, m, s)).toBe(expectedResult);
  });
});
