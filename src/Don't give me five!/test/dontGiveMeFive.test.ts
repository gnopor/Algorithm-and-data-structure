import { dontGiveMeFive } from "../index";

describe("Don't give me five!", () => {
  it("Should return  the count of all numbers except numbers with a 5 in it.", () => {
    const start1 = 1;
    const end1 = 9;
    const start2 = 4;
    const end2 = 17;

    const expectedOutput1 = 8;
    const expectedOutput2 = 12;

    expect(dontGiveMeFive(start1, end1)).toBe(expectedOutput1);
    expect(dontGiveMeFive(start2, end2)).toBe(expectedOutput2);
  });
});
