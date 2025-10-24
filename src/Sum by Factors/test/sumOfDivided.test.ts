import { sumOfDivided } from "../index";

describe("Sum by Factors", () => {
  it("Should return a sorted array of primes and the sum of their divided.", () => {
    const I1 = [12, 15];
    const I2 = [
      881, -903, -432, 162, -58, 113, -919, 358, -589, 316, 44, 588, -415, 525,
    ];

    const expectedResult1 = [
      [2, 12],
      [3, 27],
      [5, 15],
    ];
    const expectedResult2 = [
      [2, 978],
      [3, -60],
      [5, 110],
      [7, 210],
      [11, 44],
      [19, -589],
      [29, -58],
      [31, -589],
      [43, -903],
      [79, 316],
      [83, -415],
      [113, 113],
      [179, 358],
      [881, 881],
      [919, -919],
    ];

    expect(sumOfDivided(I1).toString()).toBe(expectedResult1.toString());
    expect(sumOfDivided(I2).toString()).toBe(expectedResult2.toString());
  });
});
