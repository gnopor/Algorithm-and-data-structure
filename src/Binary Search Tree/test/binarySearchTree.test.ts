import playground from "../index";

describe("Binary Search Tree", () => {
  it("Should insert elements, remove the last one and give the height of the tree", () => {
    const values = [3, 5, 2, 1, 4, 6, 7, 8];
    const expectedResult = 3;

    expect(playground(values)).toBe(expectedResult);
  });
});
