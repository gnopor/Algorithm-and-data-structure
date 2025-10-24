import { descendingOrder } from "../index";

describe("Descending Order", () => {
  it("Should return the digits in descending order", () => {
    const n1 = 145263;
    const n2 = 123456789;

    const expectedResult1 = 654321;
    const expectedResult2 = 987654321;

    expect(descendingOrder(n1)).toBe(expectedResult1);
    expect(descendingOrder(n2)).toBe(expectedResult2);
  });
});
