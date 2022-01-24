function birthdayCakeCandles(candles) {
    var amount = 0;
    var max = Math.max.apply(null, candles);
    candles.forEach(function (num) { return num === max && amount++; });
    return amount;
}
// const arr = [3, 2, 1, 3];
// console.log(birthdayCakeCandles(arr));
module.exports = birthdayCakeCandles;
