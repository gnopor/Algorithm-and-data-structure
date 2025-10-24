import separateNumbers from "../index";

describe("Separate the Numbers", () => {
  it("Should use print 'YES' followed by the first item of the list", () => {
    console.log = jest.fn();
    const s = "1234";
    const expectedResult = "YES 1";
    separateNumbers(s);

    expect(console.log).toHaveBeenLastCalledWith(expectedResult);
  });
});
