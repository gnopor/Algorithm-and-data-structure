function timeConversion(s) {
    var formatString = function (str) { return (str.length < 2 ? "0" + str : str); };
    var is_pm = s.trim().substr(-2).toLocaleLowerCase() === "pm";
    var result = s.trim().split(":");
    result[2] = result[2].substr(0, 2);
    var hour = +result[0];
    result[0] = is_pm
        ? hour < 12
            ? "" + (hour + 12)
            : "" + hour
        : hour < 12
            ? "" + hour
            : "00";
    return result.map(function (item) { return formatString(item); }).join(":");
}
// const time = "12:05:45AM";
// console.log(timeConversion(time));
module.exports = timeConversion;
