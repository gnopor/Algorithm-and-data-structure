import libraryFine from "../index";

describe("Library Fine", () => {
  it("Should return the correct pair.", () => {
    const d1 = 9;
    const m1 = 7;
    const y1 = 2018;
    const d2 = 6;
    const m2 = 7;
    const y2 = 2018;
    const expectedResult = 45;

    expect(libraryFine(d1, m1, y1, d2, m2, y2)).toBe(expectedResult);
  });
});
