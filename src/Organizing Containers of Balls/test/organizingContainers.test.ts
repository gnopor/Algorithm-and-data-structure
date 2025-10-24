import organizingContainers from "../index";

describe("Organizing Containers of Balls", () => {
  it("Should return 'Possible' if sorting is possible and 'Impossible' if not", () => {
    const container = [
      [0, 2, 1],
      [1, 1, 1],
      [2, 0, 0],
    ];
    const expectedResult = "Possible";

    expect(organizingContainers(container)).toBe(expectedResult);
  });
});
