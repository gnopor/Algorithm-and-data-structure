import countSort from "../index";

describe("ACM ICPC Team", () => {
  it("Should find the right pair of max subject and team", () => {
    console.log = jest.fn();

    const arr = [
      ["0", "a"],
      ["1", "b"],
      ["0", "c"],
      ["1", "d"],
    ];
    const expectedResult = "- c - d";

    countSort(arr);

    expect(console.log).toHaveBeenCalledWith(expectedResult);
  });
});
