import permutationEquation from "../index";

describe("Permutain Equation", () => {
  it("Function should return the correct permutation indexes.", () => {
    const p1 = [4, 3, 5, 1, 2];
    const r1 = [1, 3, 5, 4, 2];

    const p2 = [2, 3, 1];
    const r2 = [2, 3, 1];

    expect(permutationEquation(p1).toString()).toBe(r1.toString());
    expect(permutationEquation(p2).toString()).toBe(r2.toString());
  });
});
