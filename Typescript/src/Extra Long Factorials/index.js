function extraLongFactorials(n) {
    var factorial = function (num) {
        var newNum = BigInt(num);
        return newNum === BigInt(0)
            ? BigInt(1)
            : newNum * factorial(newNum - BigInt(1));
    };
    console.log(factorial(n).toString());
}
// Test
var n = 25;
extraLongFactorials(n);
module.exports = extraLongFactorials;
