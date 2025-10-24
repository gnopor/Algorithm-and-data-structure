import solution from "../index";

describe("Smallest Possible Sum", () => {
  it("Should return the smallest possible sum.", () => {
    const numbers = [6, 9, 21];
    const expectedResult = 9;

    expect(solution(numbers)).toBe(expectedResult);
  });
});
