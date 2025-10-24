import { productArray } from "../index";

describe("Product Array(Array Series #5)", () => {
  it("Should return a product array of same size matching the discription", () => {
    const nums1 = [12, 15];
    const nums2 = [10, 3, 5, 6, 2];

    const expectedResult1 = [15, 12];
    const expectedResult2 = [180, 600, 360, 300, 900];

    expect(productArray(nums1).toString()).toBe(expectedResult1.toString());
    expect(productArray(nums2).toString()).toBe(expectedResult2.toString());
  });
});
