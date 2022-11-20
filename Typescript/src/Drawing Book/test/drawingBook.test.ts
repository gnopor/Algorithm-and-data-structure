import pageCount from "../index";

describe("Drawing book", () => {
  it("Function should return the minimun page turn", () => {
    const n1 = 5;
    const p1 = 4;
    const r1 = 0;

    const n2 = 6;
    const p2 = 2;
    const r2 = 1;

    expect(pageCount(n1, p1)).toBe(r1);
    expect(pageCount(n2, p2)).toBe(r2);
  });
});
