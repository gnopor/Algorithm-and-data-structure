import { snail } from "../index";

describe("Snail", () => {
  it("should return the array elements arranged from outermost elements to the middle element, traveling clockwise.", () => {
    const array1 = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    const array2 = [
      [1, 2, 3, 4, 5, 6],
      [20, 21, 22, 23, 24, 7],
      [19, 32, 33, 34, 25, 8],
      [18, 31, 36, 35, 26, 9],
      [17, 30, 29, 28, 27, 10],
      [16, 15, 14, 13, 12, 11],
    ];

    const expectedResult1 = [
      1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10,
    ];
    const expectedResult2 = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    ];

    expect(snail(array1).toString()).toBe(expectedResult1.toString());
    expect(snail(array2).toString()).toBe(expectedResult2.toString());
  });
});
