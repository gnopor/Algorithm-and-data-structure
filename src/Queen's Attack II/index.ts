export default function queensAttack(
  n: number,
  k: number,
  r_q: number,
  c_q: number,
  obstacles: number[][]
): number {
  let totalCells = 0;
  const removes = {
    left: { value: 0, history: [0] },
    up: { value: 0, history: [0] },
    right: { value: 0, history: [0] },
    down: { value: 0, history: [0] },
    leftUp: { value: 0, history: [0] },
    leftDown: { value: 0, history: [0] },
    rightUp: { value: 0, history: [0] },
    rightDown: { value: 0, history: [0] },
  };

  const getCountLeft = (c: number) => c - 1;
  const getCountUp = (r: number) => n - r;
  const getCountRight = (c: number) => n - c;
  const getCountDown = (r: number) => r - 1;
  const checkObstacle = (r: number, c: number) => {
    const diffRow = r_q - r;
    const diffCol = c_q - c;

    if (
      diffCol != 0 &&
      diffRow != 0 &&
      Math.abs(diffCol) != Math.abs(diffRow)
    ) {
      return 0;
    }

    const left = getCountLeft(c) + 1;
    const up = getCountUp(r) + 1;
    const right = getCountRight(c) + 1;
    const down = getCountDown(r) + 1;

    if (diffCol == 0) {
      if (diffRow > 0) {
        removes.down.history.push(down);
        if (removes.down.value < down) removes.down.value = down;
        return down;
      }

      removes.up.history.push(up);
      if (removes.up.value < up) removes.up.value = up;
      return up;
    }
    if (diffRow == 0) {
      if (diffCol > 0) {
        removes.left.history.push(left);
        if (removes.left.value < left) removes.left.value = left;
        return left;
      }

      removes.right.history.push(right);
      if (removes.right.value < right) removes.right.value = right;
      return right;
    }

    if (diffCol > 0 && diffRow < 0) {
      const leftUp = left < up ? left : up;

      removes.leftUp.history.push(leftUp);
      if (removes.leftUp.value < leftUp) removes.leftUp.value = leftUp;
      return leftUp;
    }

    if (diffCol > 0 && diffRow > 0) {
      const leftDown = left < down ? left : down;

      removes.leftDown.history.push(leftDown);
      if (removes.leftDown.value < leftDown) removes.leftDown.value = leftDown;
      return leftDown;
    }

    if (diffCol < 0 && diffRow < 0) {
      const rightUp = right < up ? right : up;

      removes.rightUp.history.push(rightUp);
      if (removes.rightUp.value < rightUp) removes.rightUp.value = rightUp;
      return rightUp;
    }

    if (diffCol < 0 && diffRow > 0) {
      const rightDown = right < down ? right : down;

      removes.rightDown.history.push(rightDown);
      if (removes.rightDown.value < rightDown)
        removes.rightDown.value = rightDown;
      return rightDown;
    }
  };

  const left = getCountLeft(c_q);
  const up = getCountUp(r_q);
  const right = getCountRight(c_q);
  const down = getCountDown(r_q);
  const leftUp = left > up ? up : left;
  const leftDown = left > down ? down : left;
  const rightUP = right > up ? up : right;
  const rightDown = right > down ? down : right;

  totalCells =
    left + up + right + down + leftUp + leftDown + rightUP + rightDown;

  for (let obstable of obstacles) {
    checkObstacle(obstable[0], obstable[1]);
  }

  for (let value of Object.values(removes)) {
    totalCells -= value.value;
  }

  return totalCells;
}

// test
// const n = 8;
// const k = 1;
// const r_q = 4;
// const c_q = 4;
// const obstacles: number[][] = [[3, 5]];

// const n = 5;
// const k = 3;
// const r_q = 4;
// const c_q = 3;
// const obstacles: number[][] = [
//   [5, 5],
//   [4, 2],
//   [2, 3],
// ];

const n = 100;
const k = 100;
const r_q = 48;
const c_q = 81;
const obstacles: number[][] = [
  [54, 87],
  [64, 97],
  [42, 75],
  [32, 65],
  [42, 87],
  [32, 97],
  [54, 75],
  [64, 65],
  [48, 87],
  [48, 75],
  [54, 81],
  [42, 81],
  [45, 17],
  [14, 24],
  [35, 15],
  [95, 64],
  [63, 87],
  [25, 72],
  [71, 38],
  [96, 97],
  [16, 30],
  [60, 34],
  [31, 67],
  [26, 82],
  [20, 93],
  [81, 38],
  [51, 94],
  [75, 41],
  [79, 84],
  [79, 65],
  [76, 80],
  [52, 87],
  [81, 54],
  [89, 52],
  [20, 31],
  [10, 41],
  [32, 73],
  [83, 98],
  [87, 61],
  [82, 52],
  [80, 64],
  [82, 46],
  [49, 21],
  [73, 86],
  [37, 70],
  [43, 12],
  [94, 28],
  [10, 93],
  [52, 25],
  [50, 61],
  [52, 68],
  [52, 23],
  [60, 91],
  [79, 17],
  [93, 82],
  [12, 18],
  [75, 64],
  [69, 69],
  [94, 74],
  [61, 61],
  [46, 57],
  [67, 45],
  [96, 64],
  [83, 89],
  [58, 87],
  [76, 53],
  [79, 21],
  [94, 70],
  [16, 10],
  [50, 82],
  [92, 20],
  [40, 51],
  [49, 28],
  [51, 82],
  [35, 16],
  [15, 86],
  [78, 89],
  [41, 98],
  [70, 46],
  [79, 79],
  [24, 40],
  [91, 13],
  [59, 73],
  [35, 32],
  [40, 31],
  [14, 31],
  [71, 35],
  [96, 18],
  [27, 39],
  [28, 38],
  [41, 36],
  [31, 63],
  [52, 48],
  [81, 25],
  [49, 90],
  [32, 65],
  [25, 45],
  [63, 94],
  [89, 50],
  [43, 41],
];

console.log(queensAttack(n, k, r_q, c_q, obstacles));
