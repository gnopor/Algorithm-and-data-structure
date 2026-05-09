import { openOrSenior } from "../index";

describe("Categozie New Member", () => {
  it("Should return the category of each member.", () => {
    const tests = [
      {
        params: {
          data: [
            [45, 12],
            [55, 21],
            [19, -2],
            [104, 20],
          ],
        },
        output: ["Open", "Senior", "Open", "Senior"],
      },
      {
        params: {
          data: [
            [3, 12],
            [55, 1],
            [91, -2],
            [53, 23],
          ],
        },
        output: ["Open", "Open", "Open", "Open"],
      },
    ];

    for (let { params, output } of tests) {
      expect(openOrSenior(params.data).toString()).toBe(output.toString());
    }
  });
});
