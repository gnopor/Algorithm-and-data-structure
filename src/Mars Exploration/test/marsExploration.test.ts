import marsExploration from "../index";

describe("Mars Exploration", () => {
  it("Finds the right number of altered characters", () => {
    const s = "SOSSPSSQSSOR";
    const expectedResult = 3;

    expect(marsExploration(s)).toBe(expectedResult);
  });
});
