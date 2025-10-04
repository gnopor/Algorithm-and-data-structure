import { betterThanAverage } from "../index";

describe("How good are you really?", () => {
  it("should return true if you did better than the average.", () => {
    const classPoints1 = [2, 3];
    const yourPoints1 = 5;

    const classPoints2 = [29, 55, 74, 60, 11, 90, 67, 28];
    const yourPoints2 = 21;

    const expectedResult1 = true;
    const expectedResult2 = false;

    expect(betterThanAverage(classPoints1, yourPoints1).toString()).toBe(
      expectedResult1.toString()
    );
    expect(betterThanAverage(classPoints2, yourPoints2).toString()).toBe(
      expectedResult2.toString()
    );
  });
});
