import minimumNumber from "../index";

describe("Strong Password", () => {
  it("Finds the right number of remaining characters", () => {
    const password = "#HackerRank";
    const n = password.length;
    const expectedResult = 1;

    expect(minimumNumber(n, password)).toBe(expectedResult);
  });
});
