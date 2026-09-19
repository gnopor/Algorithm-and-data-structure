import { twoOldestAges } from "../index";

describe("Two Oldest Ages", () => {
  it("Should take an array of numbers as its argument and return the two highest numbers within the array.", () => {
    const tests = [
      {
        params: { ages: [1, 2, 10, 8] },
        output: [8, 10],
      },
      {
        params: { ages: [1, 5, 87, 45, 8, 8] },
        output: [45, 87],
      },
      {
        params: { ages: [1, 3, 10, 0] },
        output: [3, 10],
      },
    ];

    for (let { params, output } of tests) {
      expect(twoOldestAges(params.ages)).toEqual(output);
    }
  });
});
