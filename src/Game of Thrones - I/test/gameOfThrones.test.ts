import gameOfThrones from "../index";

describe("Game of Thrones - I", () => {
  it("Function should say if the string is can be rearranged as a palindrome or not", () => {
    const s = "cdcdcdcdeeeef";
    const expectedResult = "YES";

    expect(gameOfThrones(s)).toBe(expectedResult);
  });
});
