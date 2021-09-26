function kangaroo(x1, v1, x2, v2) {
    var limit = 10000;
    var willCatch = function (condition) { return (condition ? "YES" : "NO"); };
    if (x1 > x2 && v1 > v2) {
        return willCatch(false);
    }
    if (x2 > x1 && v2 > v1) {
        return willCatch(false);
    }
    for (var i = 1; i <= limit; i++) {
        var condition = x1 + v1 * i === x2 + v2 * i;
        if (condition) {
            return willCatch(true);
        }
    }
    return willCatch(false);
}
// test
// console.log(kangaroo(0, 2, 5, 3));
module.exports = kangaroo;
