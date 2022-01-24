function diagonalDifference(arr) {
    var n = arr.length;
    var arr1 = new Array();
    var arr2 = new Array();
    for (var i = 0; i < n; i++) {
        arr1.push(arr[i][i]);
        arr2.push(arr[n - i - 1][i]);
    }
    var result = arr1.reduce(function (prev, current) { return prev + current; }) -
        arr2.reduce(function (prev, current) { return prev + current; });
    return result > 0 ? result : -result;
}
var testArr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
console.log(diagonalDifference(testArr));
module.exports = diagonalDifference;
