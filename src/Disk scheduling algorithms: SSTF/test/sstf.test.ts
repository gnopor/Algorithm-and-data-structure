import { sstf } from "../index";

describe("Disk scheduling algorithms: SSTF", () => {
  it("Should return the total head movement", () => {
    const tests = [
      {
        params: { queue: [98, 183, 37, 122, 14, 124, 65, 67], head: 53 },
        output: 236,
      },
      {
        params: { queue: [40, 60, 70], head: 50 },
        output: 40,
      },
      {
        params: { queue: [23, 50, 97, 11, 102, 1], head: 60 },
        output: 160,
      },
    ];

    for (let { params, output } of tests) {
      expect(sstf(params.queue, params.head)).toBe(output);
    }
  });
});
