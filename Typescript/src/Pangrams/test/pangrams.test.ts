import pangrams from "../index";

describe("Pangrams", () => {
  it("Should tell wether the paramter is a 'Pandram' or not", () => {
    const s = "We promptly judged antique ivory buckles for the next prize";
    const expectedResult = "pangram";

    expect(pangrams(s)).toBe(expectedResult);
  });
});
