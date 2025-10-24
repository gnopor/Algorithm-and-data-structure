export default function matrixRotation(matrix: number[][], r: number) {
  const m = matrix.length;
  const n = matrix[0].length;

  let startRow = 0;
  let endRow = m - 1;
  let startColumn = 0;
  let endColumn = n - 1;

  const newMatrix = [...matrix];

  while (startRow < endRow && startColumn < endColumn) {
    const items = [];
    const positions = [];

    // start row
    for (let i = startColumn; i <= endColumn; i++) {
      items.push(matrix[startRow][i]);
      positions.push([startRow, i]);
    }
    startRow++;

    // end column
    for (let i = startRow; i <= endRow; i++) {
      items.push(matrix[i][endColumn]);
      positions.push([i, endColumn]);
    }
    endColumn--;

    // end row
    for (let i = endColumn; i >= startColumn; i--) {
      items.push(matrix[endRow][i]);
      positions.push([endRow, i]);
    }
    endRow--;

    // start column
    for (let i = endRow; i >= startRow; i--) {
      items.push(matrix[i][startColumn]);
      positions.push([i, startColumn]);
    }
    startColumn++;

    //   reduce the rotation value
    const newRotation = r > items.length ? r % items.length : r;
    const newItems = new Array(items.length).fill(0);

    //   Rotate our values
    for (let i = 0; i < items.length; i++) {
      if (i - newRotation < 0) {
        newItems[items.length - Math.abs(i - newRotation)] = items[i];
      } else {
        newItems[i - newRotation] = items[i];
      }
    }

    //   enter new values at their right places
    for (let i = 0; i < newItems.length; i++) {
      newMatrix[positions[i][0]][positions[i][1]] = newItems[i];
    }
  }

  //   console.log(newMatrix);

  for (let array of newMatrix) {
    console.log(array.join(" "));
  }
}

// // Test
// const matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];
// const r = 2;
// matrixRotation(matrix, r);
