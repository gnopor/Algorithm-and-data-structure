import { validParentheses } from "../index";

describe("Valid Parenthese", () => {
  it("Should return true if the parentheses are valid and false if not.", () => {
    const parenStr1 = "(())((()())())";
    const parenStr2 = "(()((()())())";

    const expectedOutput1 = true;
    const expectedOutput2 = false;

    expect(validParentheses(parenStr1)).toBe(expectedOutput1);
    expect(validParentheses(parenStr2)).toBe(expectedOutput2);
  });
});
