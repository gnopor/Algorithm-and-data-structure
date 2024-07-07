/**
 * With the help of:
 * ChatGpt explanations: readme.md
 * Hackerrank: Discussions (comment: https://www.hackerrank.com/challenges/a-chessboard-game-1/forum/comments/140139) (jawad_cs, NikhilChigali, rolfbuch )
 */

export default function chessboardGame(x: number, y: number): string {
  const player1 = "First";
  const player2 = "Second";

  type IParam = [number, number];
  const move1 = ([xi, yi]: IParam): IParam => [xi - 2, yi + 1];
  const move2 = ([xi, yi]: IParam): IParam => [xi - 2, yi - 1];
  const move3 = ([xi, yi]: IParam): IParam => [xi + 1, yi - 2];
  const move4 = ([xi, yi]: IParam): IParam => [xi - 1, yi - 2];

  const checkResult = ([xi, yi]: IParam): null | IParam => {
    if (xi < 1 || yi < 1) return null;
    if (xi > 15 || yi > 15) return null;

    return [xi, yi];
  };

  const mapResults: Record<string, string> = {};

  const fillGrid = () => {
    for (let x = 1; x <= 15; x++) {
      for (let y = 1; y <= 15; y++) {
        const coordinates: IParam = [x, y];
        const key = coordinates.join(",");

        const result1 = checkResult(move1(coordinates));
        const result2 = checkResult(move2(coordinates));
        const result3 = checkResult(move3(coordinates));
        const result4 = checkResult(move4(coordinates));

        if (
          result1 == null &&
          result2 == null &&
          result3 == null &&
          result4 == null
        ) {
          mapResults[key] = "losing";
          continue;
        }

        const results = [result1, result2, result3, result4];

        //  if any move is lose, he wins
        let isWinning = false;
        for (let r of results) {
          if (!r || mapResults[r.join(",")] != "losing") continue;

          isWinning = true;
          mapResults[key] = "winning";
          break;
        }
        if (isWinning) continue;

        //  if all moves are wins, he loses
        let isLosing = false;
        for (let r of results) {
          if (!r) continue;

          if (mapResults[r.join(",")] != "winning") {
            isLosing = false;
            break;
          }

          isLosing = true;
        }
        if (isLosing) {
          mapResults[key] = "losing";
        }
      }
    }
  };

  // I have choosen this (5) randomly but is this the only that I have discover that allows us fill the whole grid
  for (let i = 0; i < 5; i++) {
    fillGrid();

    // console.log({ mapResults });
  }

  const result = mapResults[`${x},${y}`];
  return result == "winning" ? player1 : player2;
}

// test
const x = 13;
const y = 15;
console.log(chessboardGame(x, y));
