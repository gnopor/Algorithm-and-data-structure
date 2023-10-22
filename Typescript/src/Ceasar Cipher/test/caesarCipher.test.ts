import caesarCipher from "../index";

describe("Caesar Cipher", () => {
  it("Should return the correct encrypted version of the text", () => {
    const s = "middle-Outz";
    const k = 2;
    const expectedResult = "okffng-Qwvb";

    expect(caesarCipher(s, k)).toBe(expectedResult);
  });
});
