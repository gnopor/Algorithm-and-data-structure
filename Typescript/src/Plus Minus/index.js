function plusMinus(arr) {
    var positive = 0;
    var negative = 0;
    var zero = 0;
    var lenght = arr.length;
    var formatValue = function (num) {
        var decimal = 6;
        var num_array = num.toString().split(".");
        var result = "";
        if (!num_array[1]) {
            result = num + "." + "0".repeat(decimal);
        }
        else {
            if (num_array[1].length > decimal) {
                result = num.toString().slice(0, -(num_array[1].length - decimal));
            }
            else {
                result = num_array[0] + "." + num_array[1] + "0".repeat(decimal - num_array[1].length);
            }
        }
        return result;
    };
    for (var i = 0; i < lenght; i++) {
        var item = arr[i];
        if (item > 0) {
            positive++;
        }
        else if (item < 0) {
            negative++;
        }
        else {
            zero++;
        }
    }
    console.log(formatValue(positive / lenght));
    console.log(formatValue(negative / lenght));
    console.log(formatValue(zero / lenght));
}
// const arr = [-4, 3, -9, 0, 4, 1];
// plusMinus(arr);
module.exports = plusMinus;
