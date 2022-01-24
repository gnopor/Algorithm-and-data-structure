// function miniMaxSum(arr: number[]): void {
//   const new_arr = arr.sort();
//   console.log(
//     new_arr.slice(0, -1).reduce((p, c) => p + c),
//     new_arr.slice(1).reduce((p, c) => p + c)
//   );
// }
function miniMaxSum(arr) {
    var new_arr = arr;
    for (var i = 0; i < new_arr.length; i++) {
        for (var j = i + 1; j < new_arr.length; j++) {
            if (new_arr[j] < new_arr[i]) {
                var big = new_arr[i];
                new_arr[i] = new_arr[j];
                new_arr[j] = big;
            }
        }
    }
    console.log(new_arr.slice(0, -1).reduce(function (p, c) { return p + c; }), new_arr.slice(1).reduce(function (p, c) { return p + c; }));
}
// test code
// const arr: number[] = [0, 5, 4, 3, 2, 1];
// miniMaxSum(arr);
module.exports = miniMaxSum;
