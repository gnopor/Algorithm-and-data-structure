import camelcase from "../index";

describe("CamelCase", () => {
  it("Finds the right number of word in a camelcase word", () => {
    const s = "saveChangesInTheEditor";
    const expectedResult = 5;

    expect(camelcase(s)).toBe(expectedResult);
  });
});
