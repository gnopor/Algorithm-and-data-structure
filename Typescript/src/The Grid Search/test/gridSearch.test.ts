import gridSearch from "../index";

describe("The Grid Search", () => {
  it("Returns YES if the pattern is found and NO if not.", () => {
    const G = [
      "1234567890",
      "0987654321",
      "1111111111",
      "1111111111",
      "2222222222",
    ];
    const P = ["876543", "111111", "111111"];
    const expectedResult = "YES";

    expect(gridSearch(G, P)).toBe(expectedResult);
  });
});
