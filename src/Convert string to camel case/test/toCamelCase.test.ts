import toCamelCase from "../index";

describe("Convert string to camel case", () => {
  it("Convert the given string to a capitalize one knowing that the separators are - and _", () => {
    const str = "The_Stealth_Warrior";
    const expectedResult = "TheStealthWarrior";

    expect(toCamelCase(str)).toBe(expectedResult);
  });
});
