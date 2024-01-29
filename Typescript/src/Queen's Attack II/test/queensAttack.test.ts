import queensAttack from "../index";

describe("Queen's Attack II", () => {
  it("Should return the right number of cells reacheable by the queen", () => {
    const n = 8;
    const k = 1;
    const r_q = 4;
    const c_q = 4;
    const obstacles: number[][] = [[3, 5]];
    const expectedResult = 24;

    expect(queensAttack(n, k, r_q, c_q, obstacles)).toBe(expectedResult);
  });
});
