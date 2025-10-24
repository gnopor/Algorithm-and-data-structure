import flatlandSpaceStations from "../index";

describe("Flat Land Space Stations", () => {
  it("flatlandSpaceStations should return the maximum nearest airport.", () => {
    const n = 5;
    const c = [0, 4];
    expect(flatlandSpaceStations(n, c)).toBe(2);
  });
});
