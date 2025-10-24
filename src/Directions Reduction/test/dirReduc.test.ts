import dirReduc from "../index";

describe("Directions Reduction", () => {
  it("Should return the shortest path", () => {
    const arr1 = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];
    const arr2 = ["NORTH", "SOUTH", "EAST", "WEST"];

    const expectedResult1 = ["WEST"];
    const expectedResult2 = [];

    expect(dirReduc(arr1).toString()).toBe(expectedResult1.toString());
    expect(dirReduc(arr2).toString()).toBe(expectedResult2.toString());
  });
});
