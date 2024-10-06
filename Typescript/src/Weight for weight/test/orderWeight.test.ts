import orderWeight from "../index";

describe("Weight for weight", () => {
  it("Should return the weights sorted based on the sum of their weight digits", () => {
    const strng = "2000 10003 1234000 44444444 9999 11 11 22 123";
    const expectedResult = "11 11 2000 10003 22 123 1234000 44444444 9999";

    expect(orderWeight(strng)).toBe(expectedResult);
  });
});
