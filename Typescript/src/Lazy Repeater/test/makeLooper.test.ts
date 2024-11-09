import makeLooper from "../index";

describe("Lazy Repeater", () => {
  it("Function should return the a function loop over the string parameter and repeate once the at the end of the string.", () => {
    const str = "abc";
    const expectedResult = "abc";

    const looper = makeLooper(str);

    expect(looper()).toBe(expectedResult[0]);
    expect(looper()).toBe(expectedResult[1]);
    expect(looper()).toBe(expectedResult[2]);
    expect(looper()).toBe(expectedResult[0]);
    expect(looper()).toBe(expectedResult[1]);
  });
});
