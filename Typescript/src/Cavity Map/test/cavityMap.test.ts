import cavityMap from "../index";

describe("Cavity Map", () => {
  it("Finds and updates the cavity maps", () => {
    const grid = ["1112", "1912", "1892", "1234"];
    const expectedResult = ["1112", "1X12", "18X2", "1234"];

    expect(cavityMap(grid).toString()).toBe(expectedResult.toString());
  });
});
