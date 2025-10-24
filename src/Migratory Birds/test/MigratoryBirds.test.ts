import migratoryBirds from "../index";

describe("Is the migratory bird result accurate", () => {
  it("Check if kangoroo will meet at some point", () => {
    const params = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
    const expected_result = 3;
    expect(migratoryBirds(params)).toBe(expected_result);
  });
});
