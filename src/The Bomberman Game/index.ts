/**
 * The program repeat every 4 seconds after the 1st second(2-5, 6-9, ...) tried it on paper with ["0..",".0.","00."].
 * The is the step in second:
 * 1 - Initial state
 * 2 - Full state. Every 2 seconds ( or on 2 and on 4)
 * 3 - 1st explosion
 * 4 - Full state (like 2)
 * 5 - 2nd explosion
 * @param n
 * @param grid
 */
export default function bomberMan(n: number, grid: string[]): string[] {
  if (n == 1) {
    return grid;
  }

  const fullGrid = grid.join(",").replace(/\./g, "O").split(",");
  if (n % 2 == 0) {
    return fullGrid;
  }

  const explode = (full: string[], initial: string[]): string[] => {
    const exploded = full.map((line) => line.split(""));
    const columnLength = initial.length;
    const rowLength = initial[0].length;
    for (let i = 0; i < columnLength; i++) {
      for (let j = 0; j < rowLength; j++) {
        if (initial[i][j] == ".") {
          continue;
        }
        exploded[i][j] = ".";

        if (i > 0) {
          const newI = i - 1;
          const newJ = j;

          exploded[newI][newJ] = ".";
        }
        if (i < columnLength - 1) {
          const newI = i + 1;
          const newJ = j;

          exploded[newI][newJ] = ".";
        }
        if (j > 0) {
          const newI = i;
          const newJ = j - 1;

          exploded[newI][newJ] = ".";
        }
        if (j < rowLength - 1) {
          const newI = i;
          const newJ = j + 1;

          exploded[newI][newJ] = ".";
        }
      }
    }
    return exploded.map((line) => line.join(""));
  };

  const second = (n - 1) % 4; // repetion start after the 1st second, so we added a setback of 1 second (2-5 => 1-4 & 6-9 => 5-8)
  const firstExplosionGrid = explode(fullGrid, grid);

  if (second == 2) {
    return firstExplosionGrid; // normaly step 3
  }

  const secondExplosionGrid = explode(fullGrid, firstExplosionGrid);
  return secondExplosionGrid; // normaly step 4
}

// Test
const n = 3;
const grid = [".......", "...O...", "....O..", ".......", "OO.....", "OO....."];
// const n = 9;
// const grid = ["O..", ".O.", "OO."];
console.log(bomberMan(n, grid));
