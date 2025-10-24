import jimOrders from "../index";

describe("Jim and the Orders", () => {
  it("Should return an array of customer numbers that describes the sequence in which the customers receive their burgers", () => {
    const orders = [
      [8, 3],
      [5, 6],
      [6, 2],
      [2, 3],
      [4, 3],
    ];
    const expectedResult = [4, 5, 3, 1, 2];

    expect(jimOrders(orders).toString()).toBe(expectedResult.toString());
  });
});
