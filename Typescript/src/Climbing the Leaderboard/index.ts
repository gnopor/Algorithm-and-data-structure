function climbingLeaderboard(ranked: number[], player: number[]): number[] {
  const ranks = [];
  const newRanked = Array.from(new Set(ranked));

  for (let p of player) {
    if (p >= ranked[0]) {
      ranks.push(1);
      continue;
    }

    if (p === newRanked[newRanked.length - 1]) {
      ranks.push(newRanked.length);
      continue;
    }

    if (p < newRanked[newRanked.length - 1]) {
      ranks.push(newRanked.length + 1);
      continue;
    }

    for (let i = 1; i < newRanked.length; i++) {
      if (p >= newRanked[i]) {
        ranks.push(i + 1);
        break;
      }
    }
  }

  return ranks;
}

// Test
// const ranked = [100, 90, 90, 80, 75, 60];
// const player = [50, 65, 77, 90, 102];
// console.log(climbingLeaderboard(ranked, player));

module.exports = climbingLeaderboard;
