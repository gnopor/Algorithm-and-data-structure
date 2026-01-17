import { backwardsPrime } from "../index";

describe("Backwards Read Primes", () => {
  it("Should Find all Backwards-read-primes between two positive given numbers.", () => {
    const tests = [
      {
        params: {
          start: 70000,
          stop: 70245,
        },
        output: [70001, 70009, 70061, 70079, 70121, 70141, 70163, 70241],
      },
      {
        params: {
          start: 109500,
          stop: 109700,
        },
        output: [109537, 109579, 109583, 109609, 109663],
      },
    ];

    for (let { params, output } of tests) {
      expect(backwardsPrime(params.start, params.stop).toString()).toBe(
        output.toString(),
      );
    }
  });
});
