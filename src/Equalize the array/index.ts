export default function equalizeArray(arr: number[]): number {
  let mapRepetition: { [key: string]: number } = {};
  for (let element of arr) {
    if (!mapRepetition[element]) {
      mapRepetition[element] = 1;
      continue;
    }
    mapRepetition[element] += 1;
  }

  const maxRepetition = Math.max(...Object.values(mapRepetition));

  return arr.length - maxRepetition;
}

const arr = [3, 3, 2, 1, 3];

console.log(equalizeArray(arr));
