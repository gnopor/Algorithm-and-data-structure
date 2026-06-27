export function betterThanAverage(
  classPoints: number[],
  yourPoints: number
): boolean {
  return (
    classPoints.reduce((prev = 0, current) => prev + current) /
      classPoints.length <
    yourPoints
  );
}

//  test
const classPoints = [100, 40, 34, 57, 29, 72, 57, 88];
const yourPoints = 5;
console.log(betterThanAverage(classPoints, yourPoints));
