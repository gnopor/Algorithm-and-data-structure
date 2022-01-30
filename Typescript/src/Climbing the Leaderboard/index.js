function climbingLeaderboard(ranked, player) {
    var ranks = [];
    var newRanked = Array.from(new Set(ranked));
    for (var _i = 0, player_1 = player; _i < player_1.length; _i++) {
        var p = player_1[_i];
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
        for (var i = 1; i < newRanked.length; i++) {
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
