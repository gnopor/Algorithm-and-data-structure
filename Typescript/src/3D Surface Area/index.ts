export default function surfaceArea(A: number[][]): number {
  const computeArea = (rowIndex: number, area = 0): number => {
    if (rowIndex >= A[0].length) return area;

    const row: number[] = [];
    const previousRow: number[] = [];
    const nextRow: number[] = [];

    for (let i = 0; i < A.length; i++) {
      const line = A[i];

      row.push(line[rowIndex] || 0);
      previousRow.push(line[rowIndex - 1] || 0);
      nextRow.push(line[rowIndex + 1] || 0);
    }

    const top = row.length;

    const bottom = row.length;

    const sideMinimum = row[0] + row[row.length - 1];

    const front = row.reduce((prev, current, index) => {
      const difference = current - previousRow[index];
      const value = difference > 0 ? difference : 0;
      return prev + value;
    }, 0);

    const rear = row.reduce((prev, current, index) => {
      const difference = current - nextRow[index];
      const value = difference > 0 ? difference : 0;
      return prev + value;
    }, 0);

    let sideComplement = 0;
    for (let i = 0; i < row.length - 1; i++) {
      sideComplement += Math.abs(row[i] - (row[i + 1] || 0));
    }

    // console.log({ top, bottom, sideMinimum, front, rear, sideComplement });
    const newArea =
      area + top + bottom + sideMinimum + front + rear + sideComplement;
    return computeArea(rowIndex + 1, newArea);
  };

  return computeArea(0, 0);
}

// Test

const A = [
  [1, 3, 4],
  [2, 2, 3],
  [1, 2, 4],
];
console.log(surfaceArea(A));
