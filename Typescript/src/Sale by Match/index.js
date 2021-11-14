function sockMerchant(n, ar) {
    var sockPerColor = {};
    for (var _i = 0, ar_1 = ar; _i < ar_1.length; _i++) {
        var item = ar_1[_i];
        var color = item.toString();
        sockPerColor[color] = sockPerColor[color] ? sockPerColor[color] + 1 : 1;
    }
    var numberOfPairs = Object.values(sockPerColor).reduce(function (prev, current) {
        return current < 2 ? prev : prev + (current % 2 === 0 ? current / 2 : (current - 1) / 2);
    }, 0);
    return numberOfPairs;
}
// test
// const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// const n = ar.length;
// console.log(sockMerchant(n, ar))
module.exports = sockMerchant;
