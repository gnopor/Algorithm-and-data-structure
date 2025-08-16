import { binaryToString } from "../index";

describe("Binary to Text(ASCII) Conversion", () => {
  it("Should return the equivalent decoded text of a binary string.", () => {
    const input1 = "01001011010101000100100001011000010000100101100101000101";
    const input2 = "00110001001100000011000100110001";
    const input3 = "001111000011101000101001";

    const expectedResult1 = "KTHXBYE";
    const expectedResult2 = "1011";
    const expectedResult3 = "<:)";

    expect(binaryToString(input1)).toBe(expectedResult1);
    expect(binaryToString(input2)).toBe(expectedResult2);
    expect(binaryToString(input3)).toBe(expectedResult3);
  });
});
