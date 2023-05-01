import serviceLane from "../index";

describe("Service Lane.", () => {
  it("Finds the width of the vehicle that can go through all the segment of a lane in a service lane", () => {
    const n = 0;
    const width = [2, 3, 1, 2, 3, 2, 3, 3];
    const cases = [
      [0, 3],
      [4, 6],
      [6, 7],
      [3, 5],
      [0, 7],
    ];
    const expectedResult = [1, 2, 3, 2, 1];

    expect(serviceLane(n, width, cases).toString()).toBe(
      expectedResult.toString()
    );
  });
});
