import angryProfessor from "../index";

describe("Angry professor", () => {
  it("Function should return whether or not the class in cancelled.", () => {
    const k1 = 2;
    const a1 = [0, -1, 2, 1];
    const r1 = "NO";

    const k2 = 3;
    const a2 = [-1, -3, 4, 2];
    const r2 = "YES";

    expect(angryProfessor(k1, a1)).toBe(r1);
    expect(angryProfessor(k2, a2)).toBe(r2);
  });
});
