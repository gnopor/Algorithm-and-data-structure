import taumBday from "../index";

describe("Taum and B'day", () => {
  it("Get the minimun cost of the birthday present.", () => {
    const b = 3;
    const w = 3;
    const bc = 1;
    const wc = 9;
    const z = 2;
    const expectedResult = 12;

    expect(taumBday(b, w, bc, wc, z)).toBe(expectedResult);
  });
});
