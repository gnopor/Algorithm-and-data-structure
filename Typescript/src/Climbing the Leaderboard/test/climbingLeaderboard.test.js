const climbingLeaderboard = require("../index.js");

describe("Climbinb the Leaderboard", () => {
  it("Function should return the correct player rank", () => {
    const ranked = [100, 90, 90, 80, 75, 60];
    const player = [50, 65, 77, 90, 102];
    const result = [6, 5, 4, 2, 1];
    expect(climbingLeaderboard(ranked, player)).toEqual(result);
  });
});
