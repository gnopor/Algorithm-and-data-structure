import anagram from "../index";

describe("Anagram", () => {
  it("Should return the minimum changes required", () => {
    const s = "xaxbbbxx";
    const expectedResult = 1;

    expect(anagram(s)).toBe(expectedResult);
  });
});
