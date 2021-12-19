function countingValleys(steps, path) {
    var valleysCount = 0;
    var firstStep = "";
    var stepFromSeaLevel = 0;
    for (var _i = 0, _a = path.split(""); _i < _a.length; _i++) {
        var step = _a[_i];
        firstStep = firstStep || step;
        stepFromSeaLevel += step === "U" ? 1 : -1;
        if (stepFromSeaLevel === 0) {
            valleysCount = valleysCount + (firstStep === "D" ? 1 : 0);
            firstStep = "";
        }
    }
    return valleysCount;
}
// const steps = 8;
// const path = "DUDUDUDU";
// console.log(countingValleys(steps, path));
module.exports = countingValleys;
