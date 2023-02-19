import jumpingOnClouds from "../index";

describe("Jumping on clouds", () => {
  it("Should return the minimun jump count", () => {
    const c = [0, 0, 0, 0, 1, 0];
    const expectedResult = 3;

    expect(jumpingOnClouds(c)).toBe(expectedResult);
  });
});
