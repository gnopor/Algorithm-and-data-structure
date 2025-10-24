export default function dirReduc(arr: string[]): string[] {
  const nullPair: Record<string, string> = {
    SOUTH: "NORTH",
    NORTH: "SOUTH",
    EAST: "WEST",
    WEST: "EAST",
  };

  let newRound = true;
  let reducedPath = [...arr];
  while (newRound) {
    newRound = false;

    const newPath: string[] = [];
    for (let i = 0; i < reducedPath.length; i++) {
      const current = reducedPath[i];

      if (nullPair[current] == reducedPath[i + 1]) {
        newRound = true;
        i++;
        continue;
      }

      newPath.push(current);
    }

    reducedPath = newPath;
  }

  return reducedPath;
}

// test
// const arr = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];
const arr = ["NORTH", "SOUTH", "EAST", "WEST"];
console.log(dirReduc(arr));
