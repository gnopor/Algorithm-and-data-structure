import { move } from "../index";

describe("Grasshopper - Terminal game move function", () => {
  it("should return the new hero's position", () => {
    const pos1 = 3;
    const roll1 = 6;
    const pos2 = 0;
    const roll2 = 4;
    const expectedResult1 = 15;
    const expectedResult2 = 8;

    expect(move(pos1, roll1)).toBe(expectedResult1);
    expect(move(pos2, roll2)).toBe(expectedResult2);
  });
});
