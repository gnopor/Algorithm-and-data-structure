import jumpingOnClouds from "../index";

describe("Jumping on Clouds", () => {
  it("jumpingOnClouds should return an accurate remaining energy", () => {
    const c1 = [0, 0, 1, 0, 0, 1, 1, 0];
    const k1 = 2;
    const expectedResult1 = 92;

    const c2 = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0];
    const k2 = 3;
    const expectedResult2 = 80;

    expect(jumpingOnClouds(c1, k1)).toBe(expectedResult1);
    expect(jumpingOnClouds(c2, k2)).toBe(expectedResult2);
  });
});
