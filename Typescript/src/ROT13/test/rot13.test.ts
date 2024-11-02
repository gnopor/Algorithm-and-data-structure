import rot13 from "../index";

describe("ROT13", () => {
  it("Function should return the obfuscate version of the input.", () => {
    const str = "This is my first ROT13 excercise!";
    const expectedResult = "Guvf vf zl svefg EBG13 rkprepvfr!";

    expect(rot13(str)).toBe(expectedResult);
  });
});
