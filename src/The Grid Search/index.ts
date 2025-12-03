export default function gridSearch(G: string[], P: string[]): string {
  const lengthPatternItem = P[0].length;

  const checkPattern = (indexRow: number, indexCol: number) => {
    for (let i = 1; i < P.length; i++) {
      const target = P[i];
      const targetRow = indexRow + i;
      const targetCol = indexCol;

      const subString = G[targetRow].substring(
        targetCol,
        targetCol + lengthPatternItem
      );
      if (subString != target) {
        return false;
      }
    }

    return true;
  };

  for (let i = 0; i < G.length; i++) {
    if (G.length - i < P.length) break;

    const source1 = G[i];
    const source2 = G[i + 1];
    const source3 = G[i + 2];
    const target1 = P[0];
    const target2 = P[1];
    const target3 = P[2];

    let occurrenceEndIndex = 0;
    let occurrenceFound = true;

    while (occurrenceFound) {
      const newSource = source1.substring(occurrenceEndIndex);
      const index = newSource.indexOf(target1);
      if (index == -1) {
        occurrenceFound = false;
        continue;
      }
      const indexCol = occurrenceEndIndex + index;
      occurrenceEndIndex = indexCol + 1;

      if (
        target2 &&
        source2.substring(indexCol, indexCol + lengthPatternItem) != target2
      ) {
        continue;
      }
      if (
        target3 &&
        source3.substring(indexCol, indexCol + lengthPatternItem) != target3
      ) {
        continue;
      }

      const result = checkPattern(i, indexCol);
      if (result) return "YES";
    }
  }

  return "NO";
}

// Test
// const G = [
//   "1234567890",
//   "0987654321",
//   "1111111111",
//   "1111111111",
//   "2222222222",
// ];
// const P = ["876543", "111111", "111111"];

// const G = ["123412", "561212", "123634", "781288"];
// const P = ["12", "34"];

const G = [
  "111111111111111",
  "111111111111111",
  "111111111111111",
  "111111011111111",
  "111111111111111",
  "111111111111111",
  "101010101010101",
];
const P = ["11111", "11111", "11111", "11110"];

console.log(gridSearch(G, P));
