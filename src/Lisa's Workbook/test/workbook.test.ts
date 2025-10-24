import workbook from "../index";

describe("Lisa's Workbook.", () => {
  it("Finds the number of special exercices whitin Lisa's workbook", () => {
    const n = 5;
    const k = 3;
    const arr = [4, 2, 6, 1, 10];
    const expectedResult = 4;

    expect(workbook(n, k, arr)).toBe(expectedResult);
  });
});
