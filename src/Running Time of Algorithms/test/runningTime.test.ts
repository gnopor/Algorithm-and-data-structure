import runningTime from "../index";

describe("Running time of algorithms", () => {
  it("Finds the right running time of algorithms", () => {
    const arr = [4, 3, 2, 1];
    const expectedResult = 6;

    expect(runningTime(arr)).toBe(expectedResult);
  });
});
