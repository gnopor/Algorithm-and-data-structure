import main from "../index";

describe("Day 27: Testing", () => {
  it("Should print only one log", () => {
    console.log = jest.fn();

    const expectedResult1 = "OK";

    main();

    expect(console.log).toHaveBeenNthCalledWith(1, expectedResult1);
  });
});
