export default function minimumDistances(a: number[]): number {
  const mapDistances: {
    [key: string]: { result: number; i: number; j: number };
  } = {};

  for (let i = 0; i < a.length; i++) {
    const num = a[i];
    if (!mapDistances[num]) {
      mapDistances[num] = {
        result: Infinity,
        i: i,
        j: 0,
      };
      continue;
    }

    if (mapDistances[num].result === Infinity) {
      mapDistances[num].j = i;
      mapDistances[num].result = mapDistances[num].j - mapDistances[num].i;
      continue;
    }

    const newResult = i - mapDistances[num].j;
    if (newResult < mapDistances[num].result) {
      mapDistances[num].result = newResult;
      mapDistances[num].j = i;
    }
  }

  let min = Math.min(...Object.values(mapDistances).map((item) => item.result));

  return min === Infinity ? -1 : min;
}

const a = [7, 1, 3, 4, 1, 7];

console.log(minimumDistances(a));
