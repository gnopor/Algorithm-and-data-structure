import funnyString from "../index";

describe("Funny String", () => {
  it("Should tell wether the paramter is a 'Funny' or not", () => {
    const s = "lmnop";
    const expectedResult = "Funny";

    expect(funnyString(s)).toBe(expectedResult);
  });
});
