function catsAndMouse(x, y, z) {
    var CatALocation = Math.abs(z - x);
    var CatBLocation = Math.abs(z - y);
    if (CatALocation === CatBLocation) {
        return "Mouse C";
    }
    return CatALocation < CatBLocation ? "Cat A" : "Cat B";
}
module.exports = catsAndMouse;
