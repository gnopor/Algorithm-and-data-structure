import PaginationHelper from "../index";

describe("PaginationHelper", () => {
  it("Should return behave as expected.", () => {
    const arr = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24,
    ];
    const itemsPerPage = 10;
    let helper = new PaginationHelper(arr, itemsPerPage);

    const expectedResult1 = 3;
    const expectedResult2 = 24;
    const expectedResult3 = 10;
    const expectedResult4 = 4;
    const expectedResult5 = -1;
    const expectedResult6 = -1;
    const expectedResult7 = 2;
    const expectedResult8 = 0;
    const expectedResult9 = 0;
    const expectedResult10 = -1;
    const expectedResult11 = -1;
    const expectedResult12 = -1;

    expect(helper.pageCount()).toBe(expectedResult1);
    expect(helper.itemCount()).toBe(expectedResult2);
    expect(helper.pageItemCount(1)).toBe(expectedResult3);
    expect(helper.pageItemCount(2)).toBe(expectedResult4);
    expect(helper.pageItemCount(3)).toBe(expectedResult5);
    expect(helper.pageIndex(40)).toBe(expectedResult6);
    expect(helper.pageIndex(22)).toBe(expectedResult7);
    expect(helper.pageIndex(3)).toBe(expectedResult8);
    expect(helper.pageIndex(0)).toBe(expectedResult9);
    expect(helper.pageIndex(-1)).toBe(expectedResult10);
    expect(helper.pageIndex(-23)).toBe(expectedResult11);
    expect(helper.pageIndex(-15)).toBe(expectedResult12);
  });
});
