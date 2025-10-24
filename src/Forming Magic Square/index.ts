export default function formingMagicSquare(s: number[][]): number {
  const flatMatrix = s.flat();

  const magicCubes = [
    [2, 7, 6, 9, 5, 1, 4, 3, 8],
    [6, 1, 8, 7, 5, 3, 2, 9, 4],
    [8, 3, 4, 1, 5, 9, 6, 7, 2],
    [4, 9, 2, 3, 5, 7, 8, 1, 6],
    [2, 9, 4, 7, 5, 3, 6, 1, 8],
    [4, 3, 8, 9, 5, 1, 2, 7, 6],
    [8, 1, 6, 3, 5, 7, 4, 9, 2],
    [6, 7, 2, 1, 5, 9, 8, 3, 4],
  ];

  let minCost = Infinity;

  for (const cube of magicCubes) {
    let newCost = 0;

    for (let i = 0; i < 9; i++) {
      newCost += Math.abs(flatMatrix[i] - cube[i]);
    }

    minCost = minCost < newCost ? minCost : newCost;
  }

  return minCost;
}

// Test
const s = [
  [4, 8, 2],
  [4, 5, 7],
  [6, 1, 6],
];

console.log(formingMagicSquare(s));
