import beautifulBinaryString from "../index";

describe("Beautiful Binary String", () => {
  it("Should return the correct number of steps required to make a beautiful binary", () => {
    const b = "0100101010";
    const expectedResult = 3;

    expect(beautifulBinaryString(b)).toBe(expectedResult);
  });
});
