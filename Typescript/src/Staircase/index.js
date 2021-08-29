function staircase(n) {
    var result = "";
    for (var i = 1; i <= n; i++) {
        var string = "" + " ".repeat(n - i) + "#".repeat(i) + "\n";
        result += string;
    }
    console.log(result);
    return result;
}
module.exports = staircase;
