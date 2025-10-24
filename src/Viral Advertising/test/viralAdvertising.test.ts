import viralAdvertising from "../index";

describe("Viral Advertisiong", () => {
  it("Should return the correct Compound click.", () => {
    const n = 3;
    expect(viralAdvertising(n)).toBe(9);
  });
});
