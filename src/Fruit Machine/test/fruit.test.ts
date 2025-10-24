import { fruit } from "../index";

describe("Fruit Machine", () => {
  it("Should return the score of the resulted reels", () => {
    const reel1 = [
      "Wild",
      "Star",
      "Bell",
      "Shell",
      "Seven",
      "Cherry",
      "Bar",
      "King",
      "Queen",
      "Jack",
    ];
    const reel2 = [
      "Wild",
      "Star",
      "Bell",
      "Shell",
      "Seven",
      "Cherry",
      "Bar",
      "King",
      "Queen",
      "Jack",
    ];
    const reel3 = [
      "Wild",
      "Star",
      "Bell",
      "Shell",
      "Seven",
      "Cherry",
      "Bar",
      "King",
      "Queen",
      "Jack",
    ];

    const spins1 = [1, 5, 5];
    const spins2 = [0, 5, 5];
    const spins3 = [5, 5, 5];

    const expectedResult1 = 5;
    const expectedResult2 = 10;
    const expectedResult3 = 50;

    expect(fruit([reel1, reel2, reel3], spins1)).toBe(expectedResult1);
    expect(fruit([reel1, reel2, reel3], spins2)).toBe(expectedResult2);
    expect(fruit([reel1, reel2, reel3], spins3)).toBe(expectedResult3);
  });
});
