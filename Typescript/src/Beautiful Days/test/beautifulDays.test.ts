import beautifulDays from "../index";

describe("Beautiful Days", () => {
  it("Function should return the correct beautiful days.", () => {
    expect(beautifulDays(20, 23, 6)).toBe(2);
  });
});
