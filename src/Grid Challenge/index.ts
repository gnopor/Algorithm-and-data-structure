export default function gridChallenge(grid: string[]): string {
  const sortedRows = grid.map((row) => row.split("").sort());

  for (let i = 0; i < sortedRows[0].length; i++) {
    let column: string[] = [];

    for (let characters of sortedRows) {
      column.push(characters[i]);
    }

    const serializedColumn = column.join();
    const sortedSerializedColumn = column.sort().join();

    if (serializedColumn != sortedSerializedColumn) {
      return "NO";
    }
  }

  return "YES";
}

// test
// const grid = ["ebacd", "fghij", "olmkn", "trpqs", "xywuv"];
const grid = ["mpxz", "abcd", "wlmf"];
console.log(gridChallenge(grid));
