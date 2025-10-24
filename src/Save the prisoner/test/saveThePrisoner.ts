import saveThePrisoner from "../index";

describe("Almost Sorted", () => {
  it("Should log the if and what operation are used to sort array.", () => {
    const n1 = 3;
    const m1 = 7;
    const s1 = 3;
    const r1 = 3;

    const n2 = 4;
    const m2 = 6;
    const s2 = 2;
    const r2 = 3;

    expect(saveThePrisoner(n1, m1, s1)).toBe(r1);
    expect(saveThePrisoner(n2, m2, s2)).toBe(r2);
  });
});
