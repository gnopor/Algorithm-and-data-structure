import ipsBetween from "../index";

describe("Count IP Addresses", () => {
  it("Should return number of IP addresses between the 2 addresses.", () => {
    const start = "20.0.0.10";
    const end = "20.0.1.0";
    const expectedResult = 246;

    expect(ipsBetween(start, end)).toBe(expectedResult);
  });
});
