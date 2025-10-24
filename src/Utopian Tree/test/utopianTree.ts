import utopianTree from "../index";

describe("Utopian Tree", () => {
  it("Function should return the correct height.", () => {
    const n1 = 5;
    const r1 = 14;

    const n2 = 0;
    const r2 = 1;

    expect(utopianTree(n1)).toBe(r1);
    expect(utopianTree(n2)).toBe(r2);
  });
});
