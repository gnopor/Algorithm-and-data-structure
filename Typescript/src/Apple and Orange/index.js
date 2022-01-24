function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var num_m = 0;
    var num_n = 0;
    for (var _i = 0, apples_1 = apples; _i < apples_1.length; _i++) {
        var m = apples_1[_i];
        var d = a + m;
        d >= s && d <= t && num_m++;
    }
    for (var _a = 0, oranges_1 = oranges; _a < oranges_1.length; _a++) {
        var n = oranges_1[_a];
        var d = b + n;
        d >= s && d <= t && num_n++;
    }
    console.log(num_m);
    console.log(num_n);
}
// test
// countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
module.exports = countApplesAndOranges;
