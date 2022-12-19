import circularArrayRotation from "../index";

describe("Plus Minus", () => {
  it("Function should return the right query result", () => {
    const a = [3, 4, 5];
    const k = 2;
    const queries = [1, 2];
    const expectedResult = [5, 3];

    expect(circularArrayRotation(a, k, queries).join()).toBe(
      expectedResult.join()
    );
  });
});
