function divisibleSumPairs(n, k, ar) {
    var num_pairs = 0;
    for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {
            var result = (ar[i] + ar[j]) % k;
            result === 0 && num_pairs++;
        }
    }
    return num_pairs;
}
// test
// console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
module.exports = divisibleSumPairs;
