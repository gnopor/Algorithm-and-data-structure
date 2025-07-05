export function fruit(reels: string[][], spins: number[]): number {
  const reelDoubleValueMap: Record<string, number> = {
    Wild: 10,
    Star: 9,
    Bell: 8,
    Shell: 7,
    Seven: 6,
    Cherry: 5,
    Bar: 4,
    King: 3,
    Queen: 2,
    Jack: 1,
  };

  const countMap: Record<string, number> = {};

  for (let i = 0; i < spins.length; i++) {
    const reel = reels[i][spins[i]];
    if (!countMap[reel]) {
      countMap[reel] = 0;
    }

    countMap[reel] += 1;
  }

  const keys = Object.keys(countMap);
  if (keys.length == 3) {
    return 0;
  }
  if (keys.length == 1) {
    return reelDoubleValueMap[keys[0]] * 10;
  }

  const keySingle = countMap[keys[0]] == 1 ? keys[0] : keys[1];
  const keyDouble = countMap[keys[0]] == 2 ? keys[0] : keys[1];

  return reelDoubleValueMap[keyDouble] * (keySingle == "Wild" ? 2 : 1);
}

// test

const reel1 = [
  "Wild",
  "Star",
  "Bell",
  "Shell",
  "Seven",
  "Cherry",
  "Bar",
  "King",
  "Queen",
  "Jack",
];
const reel2 = [
  "Wild",
  "Star",
  "Bell",
  "Shell",
  "Seven",
  "Cherry",
  "Bar",
  "King",
  "Queen",
  "Jack",
];
const reel3 = [
  "Wild",
  "Star",
  "Bell",
  "Shell",
  "Seven",
  "Cherry",
  "Bar",
  "King",
  "Queen",
  "Jack",
];

const spins = [1, 5, 5];
console.log(fruit([reel1, reel2, reel3], spins));
