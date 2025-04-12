import pigIt from "../index";

describe("Simple Pig Latin", () => {
  it("Should return the pigged version of the text.", () => {
    const a = "Hello wold !";
    const expectedResult = "elloHay oldway !";

    expect(pigIt(a)).toBe(expectedResult);
  });
});
