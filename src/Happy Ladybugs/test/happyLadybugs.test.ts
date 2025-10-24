import happyLadyBugs from "../index";

describe("happy Lady Bugs", () => {
  it("Finds if all the lady bugs are happy", () => {
    const b = "B_RRBR";
    const expectedResult = "YES";

    expect(happyLadyBugs(b)).toBe(expectedResult);
  });
});
