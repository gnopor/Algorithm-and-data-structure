import missingNumbers from "../index";

describe("Missing Numbers", () => {
  it("Should return an array of the missing number in ascending order", () => {
    const arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
    const brr = [
      203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204,
    ];
    const expectedResult = [204, 205, 206];

    expect(missingNumbers(arr, brr).toString()).toBe(expectedResult.toString());
  });
});
