function catsAndMouse(x: number, y: number, z: number) {
  const CatALocation = Math.abs(z - x);
  const CatBLocation = Math.abs(z - y);

  if (CatALocation === CatBLocation) {
    return "Mouse C";
  }

  return CatALocation < CatBLocation ? "Cat A" : "Cat B";
}

module.exports = catsAndMouse;
