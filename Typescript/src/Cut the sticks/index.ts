export default function cutTheSticks(arr: number[]): number[] {
  const lenghtsArr = [];

  let currentArr = arr;

  while (true) {
    const newLength = currentArr.length;
    if (!newLength) break;

    lenghtsArr.push(currentArr.length);

    let shotest = Infinity;
    for (let stick of currentArr) {
      if (shotest < stick) continue;

      shotest = stick;
    }

    const newArr = [];
    for (let stick of currentArr) {
      if (stick === shotest) continue;

      newArr.push(stick - shotest);
    }

    currentArr = newArr;
  }

  return lenghtsArr;
}

// Test
const arr = [5, 4, 4, 2, 2, 8];

console.log(cutTheSticks(arr));
