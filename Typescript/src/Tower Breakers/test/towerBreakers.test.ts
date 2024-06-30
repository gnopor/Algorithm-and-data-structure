import towerBreakers from "../index";

describe("Tower Breakers", () => {
  it('Should return "1" if the first player is the winner or "2" otherwise', () => {
    const n = 2;
    const m = 2;
    const expectedResult = 2;

    expect(towerBreakers(n, m)).toBe(expectedResult);
  });
});
