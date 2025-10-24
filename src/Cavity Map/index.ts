export default function cavityMap(grid: string[]): string[] {
  const initialGrid = [...grid];
  const size = grid.length - 1;
  const getValue = (x: number, y: number) => +initialGrid[y][x];
  const getTop = (x: number, y: number) => +initialGrid[y - 1][x];
  const getRight = (x: number, y: number) => +initialGrid[y][x + 1];
  const getBottom = (x: number, y: number) => +initialGrid[y + 1][x];
  const getLeft = (x: number, y: number) => +initialGrid[y][x - 1];

  for (let y = 0; y < grid.length; y++) {
    if ([0, size].includes(y)) continue;
    let row = grid[y];

    for (let x = 0; x < row.length; x++) {
      if ([0, size].includes(x)) continue;
      const value = getValue(x, y);

      if (getTop(x, y) >= value) continue;
      if (getRight(x, y) >= value) continue;
      if (getBottom(x, y) >= value) continue;
      if (getLeft(x, y) >= value) continue;

      const rowSplited = row.split("");
      rowSplited.splice(x, 1, "X");

      row = rowSplited.join("");
    }

    grid[y] = row;
  }

  return grid;
}

// Test

const grid = [
  "63456754",
  "68335522",
  "25482912",
  "54429472",
  "35416147",
  "75848666",
  "41633675",
  "82511989",
];

console.log(cavityMap(grid));
