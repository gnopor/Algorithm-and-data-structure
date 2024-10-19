import solve from "../index";

describe("Longest vowel chain", () => {
  it("Should return the length of the longest vowel substring", () => {
    const s = "iiihoovaeaaaoougjyaw";
    const expectedResult = 8;

    expect(solve(s)).toBe(expectedResult);
  });
});
