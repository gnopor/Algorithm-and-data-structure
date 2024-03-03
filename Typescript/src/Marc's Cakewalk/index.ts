export default function marcsCakewalk(calorie: number[]): number {
  let count = 0;

  calorie.sort((a, b) => b - a);
  for (let i = 0; i < calorie.length; i++) {
    count += Math.pow(2, i) * calorie[i];
  }

  return count;
}

// test
// const calorie = [5, 10, 7];
const calorie = [7, 4, 9, 6];
console.log(marcsCakewalk(calorie));
