import { toBase64, fromBase64 } from "../index";

describe("Base64 Encoding", () => {
  it("Should the convertion of string to base64 and base64 to string", () => {
    const str = "Le koki est bon quand ca chauf.";
    const expectedResult = fromBase64(toBase64(str));

    expect(str).toBe(expectedResult);
  });
});
