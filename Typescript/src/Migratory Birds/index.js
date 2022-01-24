function migratoryBirds(arr) {
    // get the number of each item
    var compounds = {};
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var id = arr_1[_i];
        compounds[id] = compounds[id] ? compounds[id] + 1 : 1;
    }
    // sort item by thier quantity
    var sorted_arr = Object.entries(compounds).sort(function (a, b) { return b[1] - a[1]; });
    var max_length = sorted_arr[0][1];
    // get all item that have thier quantity === max_length
    var result_arr = [];
    sorted_arr.filter(function (item) {
        if (item[1] === max_length) {
            result_arr.push(+item[0]);
        }
    });
    // return the item that has the min id
    return Math.min.apply(Math, result_arr);
}
// test function
// const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
// migratoryBirds(arr);
module.exports = migratoryBirds;
