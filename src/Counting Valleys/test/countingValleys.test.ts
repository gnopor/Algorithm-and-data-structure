import countingValleys from "../index";

describe("Counting Valleys", () => {
  it("Get the right number of valleys", () => {
    const steps = 8;
    const path = "DUDUDUDU";

    expect(countingValleys(8, "DUDUDUDU")).toBe(4);
  });
});
