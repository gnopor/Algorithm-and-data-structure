import chessboardGame from "../index";

describe("A Chessboard Game", () => {
  it('Should return "First" if the first player is the winner or "Second" otherwise', () => {
    const x = 5;
    const y = 2;
    const expectedResult = "Second";

    expect(chessboardGame(x, y)).toBe(expectedResult);
  });
});
