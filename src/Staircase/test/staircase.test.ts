import staircase from "../index";

describe("Staicase", () => {
  it("staircase with correct data", () => {
    expect(staircase(3)).toContain("###");
  });
});
