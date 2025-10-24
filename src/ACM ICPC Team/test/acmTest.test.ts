import acmTest from "../index";

describe("ACM ICPC Team", () => {
  it("Should find the right pair of max subject and team", () => {
    const topics = ["10101", "11110", "00010"];
    const expectedResult = [5, 1];

    expect(acmTest(topics).toString()).toBe(expectedResult.toString());
  });
});
