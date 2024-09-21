import solution from "../index";

describe("Multiples of 3 or 5", () => {
  it("Should return the sum of the multiples of 3 or 5 for all the number below the one passed", () => {
    const num = 10;
    const expectedResult = 23;

    expect(solution(num)).toBe(expectedResult);
  });
});
