export default function twoPluses(grid: string[]): number {
  const colLength = grid.length;
  const rowLength = grid[0].length;
  const maxLength = colLength < rowLength ? colLength : rowLength;
  const countSort: string[][][] = new Array(maxLength + 1).fill([]);
  const ereas = new Set<number>();

  const canGrow = (x: number, y: number, growth = 1) => {
    if (!(grid[y - growth] && grid[y - growth][x] == "G")) {
      return false;
    }
    if (!(grid[y + growth] && grid[y + growth][x] == "G")) {
      return false;
    }
    if (!(grid[y] && grid[y][x - growth] == "G")) {
      return false;
    }
    if (!(grid[y] && grid[y][x + growth] == "G")) {
      return false;
    }

    return true;
  };

  const findSize = (
    x: number,
    y: number,
    size: number,
    plus: string[]
  ): void => {
    if (!canGrow(x, y, size)) return;

    plus.push(
      ...[
        `${x + size},${y}`,
        `${x - size},${y}`,
        `${x},${y + size}`,
        `${x},${y - size}`,
      ]
    );

    const index = size * 2 + 1;
    countSort[index] = countSort[index].concat([plus]);

    findSize(x, y, size + 1, [...plus]);
  };

  const overlap = (first: string[], second: string[]): boolean => {
    for (let coordinate of second) {
      if (first.includes(coordinate)) {
        return true;
      }
    }

    return false;
  };

  const fillEreas = (firstPlus: string[]) => {
    for (let i = maxLength; i > 0; i--) {
      if (countSort[i].length == 0) continue;
      for (let plus of countSort[i]) {
        if (overlap(firstPlus, plus)) {
          continue;
        }

        ereas.add(firstPlus.length * plus.length);
      }
    }
  };

  for (let y = 0; y < colLength; y++) {
    for (let x = 0; x < rowLength; x++) {
      const value = grid[y][x];
      if (value != "G") continue;
      if (x == 0 || y == 0 || x == rowLength - 1 || y == colLength - 1) {
        countSort[1] = countSort[1].concat([[`${x},${y}`]]);

        continue;
      }

      findSize(x, y, 1, [`${x},${y}`]);
    }
  }

  for (let i = maxLength; i > 0; i--) {
    if (countSort[i].length == 0) continue;

    for (let plus of countSort[i]) {
      fillEreas(plus);
    }
  }

  return Math.max(...ereas);
}

// Test
// const grid = ["GGGGGG", "GBBBGB", "GGGGGG", "GGBBGB", "GGGGGG"];
// const grid = ["BGBBGB", "GGGGGG", "BGBBGB", "GGGGGG", "BGBBGB", "BGBBGB"];
// const grid = [
//   "GGGGGGGG",
//   "GBGBGGBG",
//   "GBGBGGBG",
//   "GGGGGGGG",
//   "GBGBGGBG",
//   "GGGGGGGG",
//   "GBGBGGBG",
//   "GGGGGGGG",
// ];
const grid = [
  "GGGGGGGGGGGG",
  "GBGGBBBBBBBG",
  "GBGGBBBBBBBG",
  "GGGGGGGGGGGG",
  "GGGGGGGGGGGG",
  "GGGGGGGGGGGG",
  "GGGGGGGGGGGG",
  "GBGGBBBBBBBG",
  "GBGGBBBBBBBG",
  "GBGGBBBBBBBG",
  "GGGGGGGGGGGG",
  "GBGGBBBBBBBG",
];
console.log(twoPluses(grid));
