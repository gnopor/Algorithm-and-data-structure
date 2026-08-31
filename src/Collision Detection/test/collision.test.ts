import { collision } from "../index";

describe("Collision Detection", () => {
  it("Should return true if collision is detected.", () => {
    const tests = [
      {
        params: { x1: 1, y1: 1, r1: 1, x2: 1.1, y2: 1.1, r2: 0.1 },
        output: true,
      },
      {
        params: { x1: 1, y1: 1, r1: 0.01, x2: 1, y2: 1.1, r2: 0.01 },
        output: false,
      },
      {
        params: {
          x1: -5,
          y1: 5,
          r1: 5.0001,
          x2: 5,
          y2: -5,
          r2: 5 * Math.sqrt(5),
        },
        output: true,
      },
    ];

    for (let { params, output } of tests) {
      expect(
        collision(
          params.x1,
          params.x2,
          params.r1,
          params.y1,
          params.y2,
          params.r2,
        ),
      ).toBe(output);
    }
  });
});
