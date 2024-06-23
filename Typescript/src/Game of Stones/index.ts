// With the help of [(Hackerrank) (Game of Stones) How could i find answer if unspecified condition](https://stackoverflow.com/questions/63663418/hackerrank-game-of-stones-how-could-i-find-answer-if-unspecified-condition)
export default function gameOfStones(n: number): string {
  const P1 = "First";
  const P2 = "Second";
  const conditions: number[] = [2, 3, 5];
  const result: Record<string, string> = {};

  const game = (
    num: number,
    conditions: number[],
    result: Record<string, string>
  ): string => {
    if (result[num] != null) {
      return result[num];
    }

    if (conditions.includes(num)) {
      result[num] = P1;
      return result[num];
    }

    if (num < Math.min(...conditions)) {
      result[num] = P2;
      return result[num];
    }

    for (const item of conditions) {
      // I play "num" and leave the oponent with "remainingNum"
      const remainingNum = num - item;

      if (remainingNum > 0 && game(remainingNum, conditions, result) == P2) {
        result[num] = P1;
        return result[num];
      }
    }

    result[num] = P2;
    return result[num];
  };

  return game(n, conditions, result);
}

// test
const n = 10;
console.log(gameOfStones(n));
