import bomberMan from "../index";

describe("The Bomberman Game", () => {
  it("Should return the grid in its final state.", () => {
    const n = 3;
    const grid = [
      ".......",
      "...O...",
      "....O..",
      ".......",
      "OO.....",
      "OO.....",
    ];
    const expectedResult = [
      "OOO.OOO",
      "OO...OO",
      "OOO...O",
      "..OO.OO",
      "...OOOO",
      "...OOOO",
    ];

    expect(bomberMan(n, grid).toString()).toBe(expectedResult.toString());
  });
});
