import cutTheSticks from "../index";

describe("Cut The Sticks", () => {
  it("Function should return the right length count array.", () => {
    const arr = [5, 4, 4, 2, 2, 8];
    const expectedResult = [6, 4, 2, 1];

    expect(cutTheSticks(arr).join()).toBe(expectedResult.join());
  });
});
