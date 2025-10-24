import decodeMorse from "../index";

describe("Decode the Morse code", () => {
  it("Should the decoded morse code.", () => {
    const morseCode = "   .   . ";
    const expectedResult = "E E";

    expect(decodeMorse(morseCode)).toBe(expectedResult);
  });
});
