import equalizeArray from "../index";

describe("Equalize Array", () => {
  it("Get the minimun number of value to delete to have a array of same elements.", () => {
    const arr = [3, 3, 2, 1, 3];
    const expectedResult = 2;

    expect(equalizeArray(arr)).toBe(expectedResult);
  });
});
