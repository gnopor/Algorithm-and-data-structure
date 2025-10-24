import bonAppetit from "../index";

describe("Bon Appetit", () => {
  it("Check if the charged bill portion is accurate", () => {
    console.log = jest.fn();
    const bill = [3, 10, 2, 9];
    const k = 1;
    const b_1 = 7;
    const b_2 = 12;
    const expected_result_1 = "Bon Appetit";
    const expected_result_2 = 5;
    bonAppetit(bill, k, b_1);
    bonAppetit(bill, k, b_2);
    expect((console.log as any).mock.calls[0][0]).toBe(expected_result_1);
    expect((console.log as any).mock.calls[1][0]).toBe(expected_result_2);
  });
});
