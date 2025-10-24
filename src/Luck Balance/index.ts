export default function luckBalance(k: number, contests: number[][]): number {
  const importantContests: number[] = [];
  let count = 0;

  for (let contest of contests) {
    count += contest[0];

    if (contest[1] === 1) {
      importantContests.push(contest[0]);
    }
  }

  importantContests.sort((a, b) => b - a);

  for (let i = k; i < importantContests.length; i++) {
    count -= importantContests[i] * 2;
  }

  return count;
}

// test
const k = 3;
const contests = [
  [5, 1],
  [2, 1],
  [1, 1],
  [8, 1],
  [10, 0],
  [5, 0],
];
// const k = 1;
// const contests = [
//   [5, 1],
//   [1, 1],
//   [4, 0],
// ];
console.log(luckBalance(k, contests));
