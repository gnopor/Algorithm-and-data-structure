import Vector from "../index";

describe("Vector class", () => {
  it("Should perform all vector operations.", () => {
    const a = new Vector([1, 2, 3]);
    const b = new Vector([3, 4, 5]);
    const c = new Vector([5, 6, 7, 8]);

    const expectedResult1 = new Vector([4, 6, 8]);
    const expectedResult2 = new Vector([-2, -2, -2]);
    const expectedResult3 = 26;

    expect(a.add(b).toString()).toBe(expectedResult1.toString());
    expect(a.subtract(b).toString()).toBe(expectedResult2.toString());
    expect(a.dot(b).toString()).toBe(expectedResult3.toString());
    expect(() => a.add(c)).toThrow(/Vectors must have the same length/);
  });
});
